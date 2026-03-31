import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private http = inject(HttpClient);
  
  getProfile() {
    return this.http.get('http://localhost:3000/api/cv');
  }
}