import { Injectable } from '@angular/core';
import { Phone } from '../models/phone.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private readonly API_URL = 'http://localhost:3000/phones';

  constructor(private http: HttpClient) { }

  getById(phoneId: string) {
    return this.http.get<Phone>(`${this.API_URL}/${phoneId}`);
  }

  getList() {
    return this.http.get<Phone[]>(this.API_URL)
  }

  private add(phone: Phone) {
    return this.http.post<Phone>(this.API_URL, phone);
  }

  private update(phone: Phone) {
    return this.http.put<Phone>(`${this.API_URL}/${phone.id}`, phone);
  }

  save(phone: Phone) {
    return phone.id ? this.update(phone) : this.add(phone);
  }

  remove(phone: Phone) {
    return this.http.delete<Phone>(`${this.API_URL}/${phone.id}`);
  }
}
