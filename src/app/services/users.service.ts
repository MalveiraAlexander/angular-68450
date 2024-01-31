import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }


  getDate(): string {
    return new Date().getDate().toString();
  }
}
