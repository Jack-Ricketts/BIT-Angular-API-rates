import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {tap} from "rxjs/operators";
import {Currency} from "../models/currency";
import { DataResponse } from "../models/rate";


@Injectable({
  providedIn: "root",
})
export class RateService {
  constructor(private http: HttpClient) {
    this.loadCurrencies();
  }

  public loadExchange(from: string, to: string) {
    return this.http.get<DataResponse>("https://api.frankfurter.app/latest", {
      params: {
        from: from,
        to: to,
      },
    });
  }
  private currencies: Currency[] = [];

  public loadCurrencies() {
    return this.http
      .get<{[key: string]: string}>("https://api.frankfurter.app/currencies")
      .pipe(
        tap((response) => {
          this.currencies = [];
          Object.entries(response).forEach(([key, value]) => {
            this.currencies.push({
              code: key,
              name: value,
            });
          });
          // console.log(this.currencies);
        })
      );
  }

  public getCurrencyNames() {
    return this.currencies;
  }
}