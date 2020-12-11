import { Component, OnInit } from "@angular/core";
import { LogicService, Details } from 'src/app/logic.service';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

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
  menuItems: any[];

  constructor(public logic: LogicService,
    private http: HttpClient) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.patient();
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  GetPatients() {
    let header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    let param = new HttpParams();
    param = param.append("firstname", "hello");
    return this.http.get("http://localhost:2000/getAllPatients", {
      headers: header
      , params: param
    });
  }
  searchname: any;
  patient() {


    this.GetPatients().subscribe((res: any) => {
      console.log("Response:-", res);
      if (res && res.length > 0) {
        res.forEach(element => {
          this.logic.patients.push({
            "name": element.name,
            "pathology": element.pathology,
            "patientid": element.patientid,
            "studydate": element.studydate,
            "birthdate": element.birthdate,
            "age": element.age,
            "sex": element.sex,
            "modality": element.modality,
            "image": element.image
          })
        });
      }
    })
  }
  displaydetails(name) {
    this.logic.naveena = [];

    let studyParams = new HttpParams();
    studyParams = studyParams.append("name", name)
    const options = name ?
      { params: new HttpParams().set('name', name) } : {};
    return this.http.get<Details>("http://127.0.0.1:5011/search", options)
      .subscribe((response) => {
        console.log("responce recieved", response)
        this.logic.naveena.push({
          "name": response.name,
          "pathology": response.pathology,
          "patientid": response.patientid,
          "studydate": response.studydate,
          "birthdate": response.birthdate,
          "age": response.age,
          "sex": response.sex,
          "modality": response.modality,
          "image": response.image
        })
        console.log("naveena" + this.logic.naveena)
      }
      )
  }
}


