import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './task.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async createTask(content: string): Promise<Task> {
    const createdTask = new this.taskModel({ content });
    return createdTask.save();
  }

  async findAllTasks(): Promise<Task[]> {
    return this.taskModel.find().sort({ _id: -1 }).exec(); // 降序
  }

  async deleteTask(id: string): Promise<any> {
    return this.taskModel.deleteOne({ _id: id }).exec();
  }

  async updateTask(id: string, content: string): Promise<any> {
    return this.taskModel.updateOne({ _id: id }, { content: content });
  }
}
