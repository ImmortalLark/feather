import { Module, Controller } from "@nestjs/common";
import AdminController from "./admin.controller";
import ArticalController from "../artical/artical.controller";
import NestedController from "nest-controller";

@Module({
  controllers: [ AdminController, ...NestedController("admin",  ArticalController) ]
})
export default class AdminModule {}