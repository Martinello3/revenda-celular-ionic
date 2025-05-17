import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Brand } from "../models/brand.type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private readonly API_URL = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.API_URL);
  }

  getById(brandId: string): Observable<Brand> {
    return this.http.get<Brand>(`${this.API_URL}/${brandId}`);
  }

  private add(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.API_URL, brand);
  }

  private update(brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(`${this.API_URL}/${brand.id}`, brand);
  }

  save(brand: Brand): Observable<Brand> {
    return brand.id ? this.update(brand) : this.add(brand);
  }

  remove(brand: Brand): Observable<Brand> {
    return this.http.delete<Brand>(`${this.API_URL}/${brand.id}`);
  }
}
