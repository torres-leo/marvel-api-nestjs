import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
@Injectable()
export class StoriesService {
  private readonly logger = new Logger('StoriesService');
  constructor(private readonly httpService: HttpService) {}

  findAll(params: any): Observable<any> {
    try {
      const data = this.httpService
        .get('', { params })
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }

  findOne(id: number): Observable<any> {
    try {
      const data = this.httpService
        .get(`/${id}`)
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      throw new NotFoundException(`Comic with id:'${id}' Not Found`);
    }
  }

  findComics(id: number): Observable<any> {
    try {
      const data = this.httpService
        .get(`/${id}/comics`)
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }

  findCharacters(id: number): Observable<any> {
    try {
      const data = this.httpService
        .get(`/${id}/characters`)
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
