import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Method } from './types/method';

@Injectable()
export class IntegrationsService {
  constructor(private readonly httpService: HttpService) {}

  async request(method: Method, url: string) {
    return await this.httpService
      .request({
        url,
        method,
      })
      .toPromise();
  }
}
