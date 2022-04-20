import {Component, OnInit} from "@angular/core";
import {Currency} from "src/app/models/currency";
import { DataResponse } from "src/app/models/rate";
import { RateService } from "src/app/services/rate.service";



@Component({
  selector: "app-rate",
  templateUrl: "./rate.component.html",
  styleUrls: ["./rate.component.css"],
})
export class RateComponent implements OnInit {
  public from: string = "";
  public to: string = "";
  public noCurrency: boolean = true;
  public rate: DataResponse = {
    amount: 0,
    base: "",
    date: "",
    rates: {
      // USD: 12,
    },
  };
  public currencyName: Currency[] = [];

  constructor(private exhangeService: RateService) {}

  ngOnInit(): void {
    // this.loadExchange();
    this.exhangeService.loadCurrencies().subscribe(() => {
      this.currencyName = this.exhangeService.getCurrencyNames();
      console.log(this.currencyName);
    });
  }

  private loadExchange() {
    this.exhangeService.loadExchange(this.from, this.to).subscribe({
      next: (responsive) => {
        this.rate = responsive;
        this.noCurrency = false;
      },
      error: (error) => {},
    });
  }

  refreshRate() {
    this.loadExchange();
  }
}