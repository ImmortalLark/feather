import { Controller } from "@nestjs/common";

export default (path, TargetClass) => {
  // 嵌套路由
  @Controller(path)
  class NestedController extends TargetClass {}

  return NestedController;
}