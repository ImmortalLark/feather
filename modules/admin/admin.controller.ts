import { Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";

@Controller("admin")
export default class AdminController {
  @HttpCode(HttpStatus.OK)
  @Post("auth")
  passport() {
    // @todo verify password
    return "auth";
  }
}