import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  public data: any; 

  constructor() { }


  public setData(data: any){
    console.log("Data provider", data)
    this.data = data;
  }

  public removeData(){
    this.data = null;
  }

}
