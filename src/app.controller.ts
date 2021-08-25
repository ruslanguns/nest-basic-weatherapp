import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/location/:search')
  getLocation(@Param('search') search?: string) {
    return this.appService.getLocation(search);
  }

  @Get('weather/:woeid')
  getWeather(@Param('woeid', new ParseIntPipe()) woeid: number) {
    return this.appService.getWeather(woeid);
  }
}
