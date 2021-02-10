import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { CusomerList } from '../customer.data'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  dataSource = new MatTableDataSource(CusomerList);
  displayedColumns: string[] = ['#', 'customer_name', 'email_id', 'phone_number', 'cust_address', 'delivery_status', 'payment_status'];


  public addCustomerForm: FormGroup = Object.create(null);

  constructor(
      public dialog: MatDialog,
      public datePipe: DatePipe,
      private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.addCustomerForm = this.formBuilder.group({
      customer_name: ['', Validators.required],
      email_id: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(13)]],
      phone_number: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      cust_address: ['', Validators.required],
      })  
  }

  addCustomer(){
    
  }


}
