import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceProxyService } from 'src/app/service-proxy.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css'],

})
export class AddPolicyComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  vehicleType = ['Two wheeler', 'four wheeler', 'truck'];

  constructor(private _formBuilder: FormBuilder, private router: Router, private service: ServiceProxyService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      group: [''],
      contactNo: ['', Validators.required],
      altContactNo: [''],
      address: ['', Validators.required],
      emailId: [''],
      reference: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      vehicleType: ['', Validators.required],
      vehicleName: ['', Validators.required],
      vehicleNo: ['', Validators.required],
      modelNo: ['', Validators.required],
      purpose: ['', Validators.required],
      capacity: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      policyType: ['', Validators.required],
      idv: ['', Validators.required],
      createDate: ['', Validators.required],
      renewalDate: ['', Validators.required],
      insCompany: ['', Validators.required],
      policyAmount: ['', Validators.required],
      paidAmount: ['', Validators.required],
      
    });
  }
  onSubmit() {
    let body = { ...this.firstFormGroup.value , ...this.secondFormGroup.value , ...this.thirdFormGroup.value};
    body.contactNo = Number(body.contactNo);
    body.altContactNo = Number(body.altContactNo);
    body.createDate = body.createDate.toLocaleDateString('en-US');
    body.renewalDate =body.renewalDate.toLocaleDateString('en-US');
    body.policyAmount = Number(body.policyAmount);
    body.paidAmount = Number(body.paidAmount)
    console.log("on submit", body);
    
    this.service.savePolicy(body).subscribe((res:any)=>{
      if(res.success == 1){
        this.router.navigateByUrl('dashboard/overview');
        this.firstFormGroup.reset();
        this.secondFormGroup.reset();
        this.thirdFormGroup.reset();
      }
    })
  }
}

