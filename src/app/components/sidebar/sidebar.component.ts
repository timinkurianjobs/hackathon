import { Component, OnInit } from "@angular/core";
import{LogicService} from 'src/app/logic.service';
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

  constructor(    public logic:LogicService,
    private http:HttpClient) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.patient();
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  searchname:any;
  patient()
  {
   
 
      
    
    
    
      let studyParams = new HttpParams();
      
      let header = new HttpHeaders();
      header.append('Content-type', 'application/json');
      console.log("***Get Study", this.searchname);
      return this.http.get("http://pne-backend-svc.default:5011/search", { headers: header, params: studyParams }).subscribe((response: any) => {
    
        if (response && response.length > 0) {
    
          response.forEach((element: { name: any; pathology:any; patientid:any; studydate:any; birthdate:any; age:any;sex:any;modality:any;image:any }) => {
            this.logic.patients.push({
    
              "name": element.name,
              "pathology": element.pathology,
              "patientid": element.patientid,
              "studydate": element.studydate,
              "birthdate": element.birthdate,
              "age": element.age,
              "sex": element.sex,
              "modality": element.modality,
              "image":element.image
    
            })
          });
    
    
        }
    
      })
  }
  displaydetails(name){
   this.logic.name=name;
    let studyParams = new HttpParams();
      
    let header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    console.log("***Get Study", name);
    return this.http.get("http://pne-backend-svc.default:5011/search", { headers: header, params: studyParams }).subscribe((response: any) => {
  
      if (response && response.length > 0) {
  
        response.forEach((element: { name: any; pathology:any; patientid:any; studydate:any; birthdate:any; age:any;sex:any;modality:any;image:any }) => {
          this.logic.naveena.push({
  
            "name": element.name,
            "pathology": element.pathology,
            "patientid": element.patientid,
            "studydate": element.studydate,
            "birthdate": element.birthdate,
            "age": element.age,
            "sex": element.sex,
            "modality": element.modality,
            "image":element.image
  
          })
        });
  
  
      }
  
    })

  }
}


