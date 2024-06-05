import { Controller, Get, Res, UseInterceptors } from "@nestjs/common";

import { View } from "../index";
import { ReactComponentInterceptor, Component } from "@react-ssr-frame/core";

@Controller()
@UseInterceptors(ReactComponentInterceptor)
export class AppController {
  @Get("/home")
  @Component(View)
  findAll(@Res() res: any) {
     
    return null;
  }
}
