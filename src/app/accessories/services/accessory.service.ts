import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessory } from '../models/accessory.type';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  private readonly API_URL = 'http://localhost:3000/accessories';

  constructor(private http: HttpClient) { }

  getById(accessoryId: string): Observable<Accessory> {
    return this.http.get<Accessory>(`${this.API_URL}/${accessoryId}`);
  }

  getList(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.API_URL);
  }

  private add(accessory: Accessory): Observable<Accessory> {
    return this.http.post<Accessory>(this.API_URL, accessory);
  }

  private update(accessory: Accessory): Observable<Accessory> {
    return this.http.put<Accessory>(`${this.API_URL}/${accessory.id}`, accessory);
  }

  save(accessory: Accessory): Observable<Accessory> {
    return accessory.id ? this.update(accessory) : this.add(accessory);
  }

  remove(accessory: Accessory): Observable<Accessory> {
    return this.http.delete<Accessory>(`${this.API_URL}/${accessory.id}`);
  }
}
