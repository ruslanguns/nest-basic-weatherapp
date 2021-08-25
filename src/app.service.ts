import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, pluck } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getLocation(location: string) {
    const apiUrl = `https://www.metaweather.com/api/location/search/?query=${location}`;
    const http$ = this.httpService.get(apiUrl).pipe(pluck('data'));
    return await lastValueFrom(http$);
  }

  async getWeather(woeid: number) {
    const apiUrl = `https://www.metaweather.com/api/location/${woeid}`;
    const http$ = this.httpService.get(apiUrl).pipe(pluck('data'));
    return await lastValueFrom(http$);
  }
}
