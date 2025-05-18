import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../models/store.type';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly API_URL = 'http://localhost:3000/stores';

  constructor(private http: HttpClient) {}

  getList(): Observable<Store[]> {
    return this.http.get<Store[]>(this.API_URL);
  }

  getById(storeId: number): Observable<Store> {
    return this.http.get<Store>(`${this.API_URL}/${storeId}`);
  }

  private add(store: Store): Observable<Store> {
    return this.http.post<Store>(this.API_URL, store);
  }

  private update(store: Store): Observable<Store> {
    return this.http.put<Store>(`${this.API_URL}/${store.id}`, store);
  }

  save(store: Store): Observable<Store> {
    return store.id ? this.update(store) : this.add(store);
  }

  remove(store: Store): Observable<Store> {
    return this.http.delete<Store>(`${this.API_URL}/${store.id}`);
  }
}
