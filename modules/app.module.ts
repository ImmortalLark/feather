import { Module } from "@nestjs/common";
import AdminModule from "./admin/admin.module";
import ArticalModule from "./artical/artical.module";

@Module({
  imports:[ AdminModule, ArticalModule ]
})
export default class ApplicationModule {}


