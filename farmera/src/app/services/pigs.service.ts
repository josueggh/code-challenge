import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PigService {
  constructor() {}
  addPig() {
    console.log('Add pig 🐷');
  }
  movePig() {
    console.log('Move pig 🚛');
  }
  salePig() {
    console.log('Sale pig 💰');
  }
}
