import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { tap, Observable } from "rxjs";
import { renderToString } from "react-dom/server";
import { FC, createElement } from "react";

@Injectable()
export class ReactComponentInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 获取当前执行的方法
    const handler = context.getHandler();

    // 使用反射获取方法上的元数据
    const component = Reflect.getMetadata("component", handler);

    console.log("Component from metadata:", component);

    // 继续执行请求链
    return next.handle().pipe(
      tap(() => {
        const res = context.switchToHttp().getResponse();
        // 修改响应体，注入React组件生成的HTML
        res.send(render(component));
      })
    );
  }
}

const render = (component: FC) => {
  const html = renderToString(createElement(component));
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Server Side Rendering with NestJS</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <!-- 引入客户端打包文件 -->
          <script src="/bundle.js"></script>
        </body>
        </html>
      `;
};
