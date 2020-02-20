import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Farmer } from './Farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerServiceService {

  constructor(private http:HttpClient) { }

  addFarmer(farmer: Farmer) {
    console.log(JSON.stringify(farmer))
    let url: "http://192.168.12.135:8282/KisanMitra/addNewFarmer";
     this.http.post(url,farmer).subscribe((data)=>{
      console.log(data)
     });
   console.log("in service");
  }
}
