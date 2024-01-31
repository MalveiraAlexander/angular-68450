import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateChangesService {

  constructor() { }

  changeColor: EventEmitter<string> = new EventEmitter<string>();
}
