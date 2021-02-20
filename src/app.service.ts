import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHealth(): Promise<string> {
    return 'Consumer App is well and alive';
  }

  async getFeedback(topic:string, data:object) : Promise<object> {
      Logger.log(`I consume topic ${topic.toUpperCase()} - PAYLOAD - ${JSON.stringify(data)}`)
      return {
        topic,
        data,
        msg:`I received the data for topic ${topic.toUpperCase()}`
      }
  }
}
