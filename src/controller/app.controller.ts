import { Controller, Get, Res, UseInterceptors } from "@nestjs/common";
// import { renderToString } from "react-dom/server";
// import { createElement } from "react";

import { App } from "../app";
import { ReactComponentInterceptor, Component } from "react-ssr-frame-core";

@Controller()
@UseInterceptors(ReactComponentInterceptor)
export class AppController {
  @Get("/home")
  @Component(App)
  findAll(@Res() res: any) {
    return null;
  }
}

// const render = () => {
//   const html = renderToString(createElement(App));
//   return `
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Server Side Rendering with NestJS</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <!-- 引入客户端打包文件 -->
//         <script src="/bundle.js"></script>
//       </body>
//       </html>
//     `;
// };
