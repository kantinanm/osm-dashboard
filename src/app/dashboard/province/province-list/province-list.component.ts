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
  province_list: any;
  //provinces$: Observable<Province[]>;
  constructor(private provinceService: ProvinceService) {
    //this.provinces$ = this.provinceService.getProvince();
    this.provinceService.list_province().then((res: any) => {
      this.province_list = res
    })
   }

  ngOnInit(): void {
  }



}
