//aqui temos as rotas

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//decorator é uma classe 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
