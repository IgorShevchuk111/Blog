import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  navSearchInputSource$: Subject<string> = new Subject<string>

  constructor() { }
}