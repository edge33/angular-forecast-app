import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  constructor(private http: HttpClient) {}

  getName(name: string): Observable<string> {
    return this.http
      .get<{ name: string }>(`/api/hello?name=${name}`)
      .pipe(map((data) => data.name));
  }
}
