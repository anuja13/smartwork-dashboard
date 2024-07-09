import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lspatient } from '../common/lspatient';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = "http://localhost:8014/dashboard/getPatientInfo"
  private activateUrl = "http://localhost:8014/dashboard/activate"
  private RCTGroupUrl = "http://localhost:8014/dashboard/setRCTGroup"
  private lspatients: Lspatient[] = [];

  constructor(private http: HttpClient) { }

  getPatientInfo(): Observable<Lspatient[]> {
    return this.http.get<Lspatient[]>(this.baseUrl);
  }

  activateBaseline(lspatient: Lspatient): Observable<any> {
    console.log(lspatient)
    return this.http.post(this.activateUrl, lspatient);
  }

  setRCTGroup(patient: {}): Observable<any> {
    console.log(patient)
    return this.http.post(this.RCTGroupUrl, patient);
  }
}
