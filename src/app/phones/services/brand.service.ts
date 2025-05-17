import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Brand } from "../models/brand.type";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BrandService {
  private readonly API_URL = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.API_URL);
  }
}
