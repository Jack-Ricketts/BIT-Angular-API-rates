import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataResponse, Rates } from 'src/app/models/rate';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  public rate:DataResponse={
    amount:5,
    base:"EUR",
    date:"2021.22.22",
    rates:{
      USD:12
    }
  }
  
  constructor(private http:HttpClient) { }
      
  ngOnInit(): void {
    this.loadRate();
  }

  private loadRate(){
    this.http.get<DataResponse>('https://api.frankfurter.app/latest?from=EUR&to=USD').subscribe(
      (response)=>{
        this.rate=response;
      }
    )
  }

  updateRate(){
    this.loadRate();
  }
}



