import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Member {
  name: string;
  last_checkin: number;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}

  getMembers(limit: number): Observable< Member[]> {
    const API_URL = `https://randomuser.me/api/?results=${limit}&inc=id,name,picture`;
    return this.http.get(API_URL).pipe(
      map( (response: any) => response.results.map( memberData => {
        const member: Member = {
          name: `${memberData.name.first} ${memberData.name.last}`,
          last_checkin: memberData.name.first.length,
          avatar: memberData.picture.thumbnail
        }
        return member;
      }))
    );
  }

}
