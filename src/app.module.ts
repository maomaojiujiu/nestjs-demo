import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task, TaskSchema } from './task.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://nestjsdemo:csx2001.11.05qq.@43.140.202.137:3004/nestjsdemo',
    ),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
