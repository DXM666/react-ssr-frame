// component.decorator.ts
import { FC } from "react";
import "reflect-metadata";

export function Component(component: FC): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    // Reflect.metadata("component", component);
    console.log("propertyKey", propertyKey);
    console.log("target", target);
    console.log("descriptor", descriptor);
    // Reflect.defineMetadata("component", component, target, propertyKey);
    Reflect.defineMetadata("component", component, descriptor.value ?? {});
  };
}
