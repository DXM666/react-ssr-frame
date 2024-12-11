import { FC } from "react";
import { of, switchMap, map, tap } from "rxjs";
import { generateHtmlTemplate, readManifest } from "./buildHtml";
import { ExecutionContext } from "@nestjs/common";

export const render = (
  context: ExecutionContext,
  component: FC,
  initialState: Object = { hello: "world" }
) => {
  return of(component)
    .pipe(
      switchMap((component: FC) =>
        readManifest().pipe(
          map((assets) => generateHtmlTemplate(component, initialState, assets))
        )
      ),
      tap((html) => {
        const res = context.switchToHttp().getResponse();
        // 这里可以将 html 写入到响应中或保存到文件等
        console.log(html)
        res.send(html);
      })
    )
    .subscribe();
};
