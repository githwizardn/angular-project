import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {
  private baseUrl = 'https://api.restful-api.dev'; // Base URL of DummyJSON API
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzE3NjE1MzQwfQ.eQnhQSnS4o0sXZWARh2HsWrEr6XfDT4ngh0ejiykfH8'; // Replace with your actual token

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
  }

  getData(resource: string, params?: any): Observable<any> {
    let url = `${this.baseUrl}/${resource}`;
    if (params) {
      url += `?${this.serializeParams(params)}`;
    }
    return this.http.get<any>(url, { headers: this.getHeaders() });
  }

  submitForm(endpoint: 'objects', data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${endpoint}`, data, { headers: this.getHeaders() });
  }

  updateData(resource: string, id: number, newData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${resource}/${id}`, newData, { headers: this.getHeaders() });
  }

  deleteData(resource: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${resource}/${id}`, { headers: this.getHeaders() });
  }

  private serializeParams(params: any): string {
    return Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
  }
}
