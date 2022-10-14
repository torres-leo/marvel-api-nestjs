import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class CharacterService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<any> {
    const data = this.httpService
      .get('')
      .pipe(map((response) => response.data));
    return data;
  }

  findOne(name: string) {
    // const data = this.httpService.get('');
  }
}
