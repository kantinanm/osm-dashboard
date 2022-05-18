import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Province } from './province';


const PROVINCES = [
	new Province(1, 'กรุงเทพมหานคร', 'Bangkok', 'Central',1568001647.271),
	new Province(2, 'สมุทรปราการ', 'Samut Prakarn', 'Central',967122211.24)
];

let provinceList$ = of(PROVINCES);

@Injectable({
  providedIn: 'root'
})

export class ProvinceService {

  constructor() { }
	getProvince(): Observable<Province[]> {
		return provinceList$;
	}

}
