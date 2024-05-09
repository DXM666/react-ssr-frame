import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { tap, Observable } from "rxjs";
import { render } from "../render";

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
        // 修改响应体，注入React组件生成的HTML
        render(context, component);
      })
    );
  }
}
