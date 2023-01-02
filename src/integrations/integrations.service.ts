import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Method } from './types/method';
import { catchError } from 'rxjs';

@Injectable()
export class IntegrationsService {
  constructor(private readonly httpService: HttpService) {}

  async request(method: Method, url: string) {
    return await this.httpService
      .request({
        url,
        method,
      })
      .pipe(
        catchError((e) => {
          const { error } = e.response.data;
          throw new BadRequestException(error.error_user_msg);
        }),
      )
      .toPromise()
      .then(function (response) {
        return response.data.result;
      });
  }
}
