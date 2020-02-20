import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Farmer } from '../Farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private http:HttpClient,private router:Router ) { }

  addFarmer(farmer: Farmer) {
    console.log(JSON.stringify(farmer))
    let url: "http://192.168.12.135:8282/KisanMitra/addNewFarmer";
     this.http.post(url,farmer).subscribe((data)=>{
      console.log(data)
      this.router.navigate(['login']);
     });
   console.log("in service");
  }
}
