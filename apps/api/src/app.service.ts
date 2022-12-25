import { Injectable } from '@nestjs/common';
import { makeData, Person } from './makeData';

@Injectable()
export class AppService {
  async getPeople() {
    return await makeData(100) as Person[];
  }
}
