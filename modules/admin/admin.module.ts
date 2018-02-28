import { Module, Controller } from "@nestjs/common";
import AdminController from "./admin.controller";
import ArticalController from "../artical/artical.controller";
import NestedControllerMixin from "../components/nestedController.component";
@Module({
  controllers: [ AdminController, NestedControllerMixin("admin/artical", ArticalController) ]
})
export default class AdminModule {}