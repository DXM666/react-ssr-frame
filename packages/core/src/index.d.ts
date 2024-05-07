/**
 * 声明命名空间名称、模块
 */
declare namespace reactSSRCore {
  /**
   * component装饰器
   * @param component react组件
   * @returns {MethodDecorator}
   */
  export declare function Component(component: FC): MethodDecorator;
  /**
   * ssr渲染拦截器
   */
  export declare class ReactComponentInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
  }
}
declare module "reac-ssr-core" {
  export = reactSSRCore;
}
