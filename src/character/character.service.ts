import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class CharacterService {
  private readonly logger = new Logger('CharacterService');
  constructor(private readonly httpService: HttpService) {}

  findAll(params: any): Observable<any> {
    try {
      const data = this.httpService
        .get('', { params })
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      throw new NotFoundException(`Petition Failed to get Characters`);
    }
  }

  findOne(id: number): Observable<any> {
    try {
      const data = this.httpService
        .get(`/${id}`)
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      throw new NotFoundException(`Character with id:'${id}' Not Found`);
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

  findStories(id: number): Observable<any> {
    try {
      const data = this.httpService
        .get(`/${id}/stories`)
        .pipe(map((response) => response.data));
      return data;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
