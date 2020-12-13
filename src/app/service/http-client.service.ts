import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class patientInfo{
  constructor( 
    
    public name:string,
    public patientid:string,
    public pathology:string,    
    public studydate:string,
    public birthdate:string,
    public age:string,  
    public sex:string,
    public modality:string,
    public image:string,            
  ) {}
} 
export class patientList{
  constructor( 
    public names:any,            
  ) {}
} 

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }
  getPatientInfo()  
  {
    console.log("backend call");
    
    return this.httpClient.get<patientInfo>("http://localhost:5000/search");

  }
  getPatients(){
    return this.httpClient.get<patientList>("http://localhost:5000/patients");
  }
}
