import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ServiceProxyService } from 'src/app/service-proxy.service';
export interface PeriodicElement {
  firstName: string;
  group: string;
  contact: string;
  vehicleType: string;
  renewalDate: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {firstName: 'Venkat', group: 'VRM', contact: '9988989988', vehicleType: 'Two-Wheeler', renewalDate: '23/03/2021', address:"2/23, sankari, salem"},
  {firstName: 'Madhan devaraj', group: 'Alepa Group', contact: '87878327322', vehicleType: 'Four-Wheeler', renewalDate: '29/07/2021', address: "2/23, sankari, salem"},
  {firstName: 'chinnaswamy', group: 'SRM', contact: '8878876272', vehicleType: 'Heavy-Truck', renewalDate: '20/04/2021', address:"2/23, sankari, salem"},
];

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})




export class OverviewComponent implements OnInit {

  constructor(private http: HttpClient, private service : ServiceProxyService) { }

  ngOnInit(): void {
    this.getPolicy();
  }
  displayedColumns: string[] = ['sno', 'fname', 'group', 'contactNo', 'vehicleType', 'renewalDate', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(e, ele){
    console.log("e, ele", e, ele)
  }

  // getPolicy(){
  //   this.http.get('localhost:8000/api/getPolicy').subscribe((res:any)=>{
  //     console.log("res", res)
  //   })
  // }
 
  getPolicy(){
    this.service.getlist().subscribe((res:any) =>{
      this.dataSource = res.data;
    })
  }
 
}
