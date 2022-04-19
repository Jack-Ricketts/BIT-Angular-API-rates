export interface Rates{
    [key: string]: number
};
  
export interface DataResponse{
    amount:number,
    base:String,
    date:String,
    rates:Rates
}