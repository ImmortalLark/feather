import { Module } from "@nestjs/common";
import ArticalModule from "./artical/artical.module";

@Module({
  imports:[ ArticalModule ]
})
export default class ApplicationModule {}


