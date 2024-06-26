import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  getSongs(): Observable<any> {
    const url = 'https://api.deezer.com/chart/0/tracks'; // URL del endpoint de Deezer
    return this.http.get<any>(url).pipe(
      map(response => response.data)
    );
  }
}
