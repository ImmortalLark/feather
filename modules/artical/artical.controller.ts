import { Controller, Get, Post, Put, Delete, HttpStatus, HttpCode } from "@nestjs/common"

@Controller("Artical")
export default class ArticalController {
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    // @todo service artical.findAll
    return [];
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create() {
    // @todo service artical.create
    return "Created";
  }

  @HttpCode(HttpStatus.OK)
  @Put()
  update() {
    // @todo service artical.update
    return "Updated";
  }

  @HttpCode(HttpStatus.OK)
  @Delete()
  delete() {
    // @todo service artical.update
    return "Deleted";
  }
}
