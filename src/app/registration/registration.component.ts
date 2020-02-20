import { Component, OnInit } from '@angular/core';
import { Farmer } from '../Farmer';
import { FarmerServiceService } from '../farmer-service.service';
import { FarmerService } from '../services/farmer.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
farmer:Farmer = new Farmer();

  constructor(private service: FarmerService) { }

  ngOnInit() {
  }

  AddUser(frm) {
    this.service.addFarmer(frm.value)
    
  }

}
