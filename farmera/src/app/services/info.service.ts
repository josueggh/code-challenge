import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

export interface Info {
  number_pigs: number;
  weeks_old: number;
  group_id: number;
  start_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private http: HttpClient) {}

  get(): Observable<Info> {
    const API_URL = `https://us-central1-farmera-challenge.cloudfunctions.net/generalInfo`;
    return this.http.get(API_URL).pipe(
      map( (response: Info) => response)
    );
  }

}
