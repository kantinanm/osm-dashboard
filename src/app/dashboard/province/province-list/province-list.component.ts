import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProvinceService } from '../province.service';
import { Province } from '../province';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {

  provinces$: Observable<Province[]>;
  constructor(private provinceService: ProvinceService) {
    this.provinces$ = this.provinceService.getProvince();
   }

  ngOnInit(): void {
  }

}
