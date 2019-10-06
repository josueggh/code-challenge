import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

export interface Alert {
  name: string;
  value: string;
  reported_at: string;
  type: string;
  created_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private http: HttpClient) {}

  get(): Observable<Alert []> {
    const API_URL = `https://us-central1-farmera-challenge.cloudfunctions.net/alerts`;
    return this.http.get(API_URL).pipe(
      map( (response: Alert[]) => response)
    );
  }
}