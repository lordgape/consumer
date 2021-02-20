import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Topic } from './dto/app.topic';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHealth(): Promise<string> {
    return this.appService.getHealth();
  }

  @Post('/:topic')
  async getFeedback(@Param() params: Topic, @Body() data: object): Promise<object> {
    let { topic } = params;
    return this.appService.getFeedback(topic,data);
  }
}
