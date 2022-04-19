import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataResponse, Rates } from 'src/app/models/rate';
import { RateService } from 'src/app/services/rate.service';

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

  public isLoading:boolean=true;
  public isError:boolean=false;
  
  constructor(private rateService:RateService) { }
      
  ngOnInit(): void {
    this.loadRate();
  }

  private loadRate(){
    this.rateService.loadRate().subscribe({
      next:(response)=>{
        this.rate=response;
        this.isLoading=false;
      },
      error:(error)=>{
        this.isLoading=false;
        this.isError=true;
      }
    });
  }

  updateRate(){
    this.loadRate();
  }
}



