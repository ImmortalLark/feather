import { Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import ArticalMixin from "../mixins/artical.mixin";

@Controller("admin")
export default class AdminController {
  @HttpCode(HttpStatus.OK)
  @Post("auth")
  passport() {
    // @todo verify password
    return "auth";
  }
}