import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Province } from './province';
import { HttpClient } from '@angular/common/http';


const PROVINCES = [
	new Province(1, 'กรุงเทพมหานคร', 'Bangkok', 'Central',1568001647.271),
	new Province(2, 'สมุทรปราการ', 'Samut Prakarn', 'Central',967122211.24)
];

let provinceList$ = of(PROVINCES);

@Injectable({
  providedIn: 'root'
})

export class ProvinceService {

    constructor(private http: HttpClient) { }
	
	getProvince(): Observable<Province[]> {
		return provinceList$;
	}

	async list_province() {
		return new Promise((res, rej) => {
		  this.http.get('http://localhost/medcare_api/req_data.php?type=list_province')
			.subscribe((data: any) => {
			  res(data)
			}, (err: any) => {
			  rej(err)
			});
		});
	}

}
