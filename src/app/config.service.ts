import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  baseUrl = 'http://localhost:3491';
  setBaseUrl(baseUrl: string){
    this.baseUrl = baseUrl;
  }
  getBaseUrl(){
    return this.baseUrl;
  }
}
