import { 
  Controller,  HttpStatus, HttpCode,
  Get, Post, Put, Delete,
  Param
 } from "@nestjs/common"

@Controller("artical")
export default class ArticalController {
  // 文章列表
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    // @todo service artical.findAll
    return [];
  }

  // 文章详情
  @HttpCode(HttpStatus.OK)
  @Get(":id")
  findOne(@Param() params) {
    // @todo service artical.findOne
    return params.id;
  }

  // 创建文章
  @HttpCode(HttpStatus.CREATED)
  @Post(":id")
  create(@Param() params) {
    // @todo service artical.create
    return params.id;
  }

  // 更新文章
  @HttpCode(HttpStatus.OK)
  @Put(":id")
  update(@Param() params) {
    // @todo service artical.update
    return params.id;
  }
  
  // 删除文章
  @HttpCode(HttpStatus.OK)
  @Delete(":id")
  delete(@Param() params) {
    // @todo service artical.update
    return params.id;
  }
}
