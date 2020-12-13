import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { HttpClientService,patientList } from "src/app/service/http-client.service";
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { LogicService, Details } from 'src/app/logic.service';

declare interface RouteInfo {
  path: string;
  title: string;



}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard"



  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  names:any=[];
  patients:any=[];
  value="timin";
  constructor(private httpClientService: HttpClientService, private logic: LogicService) { }
  ngOnInit() {
    //this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.patient();
    this.listusers();

  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  listusers(){
    this.httpClientService.getPatients().subscribe(  
      response =>this.handleresponse(response),
     );
  }
  handleresponse(response){

    console.log(response);

    this.names=response.names;

    response.names.forEach(element => {
      this.logic.patients.push({
      "name": element
      })
      });
      console.log('patients', this.logic.patients);
      this.patients=this.logic.patients;
      console.log(this.patients);



  }


}


