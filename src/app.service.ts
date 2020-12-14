import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const someString = '<button>click</button>';
    return 'Hello World!<h1>Best practice</h1>' + someString;
  }
}
