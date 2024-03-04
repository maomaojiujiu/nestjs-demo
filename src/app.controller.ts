import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './task.schema';

// 使用 restful 风格的接口
@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 新增
  @Post()
  async createTask(@Body('content') content: string): Promise<Task> {
    console.log('content', content);
    return this.appService.createTask(content);
  }

  // 查询
  @Get()
  async findAllTasks(): Promise<Task[]> {
    return this.appService.findAllTasks();
  }

  // 删除
  @Delete()
  async deleteTask(@Body('id') id: string): Promise<Task[]> {
    return this.appService.deleteTask(id);
  }

  // 修改
  @Put()
  async updateTask(
    @Body('id') id: string,
    @Body('content') content: string,
  ): Promise<Task[]> {
    console.log('id', id);
    console.log('content', content);
    return this.appService.updateTask(id, content);
  }
}
