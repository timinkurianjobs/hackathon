import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { interval } from "rxjs/internal/observable/interval";
import { switchMap,startWith } from 'rxjs/operators';




import { HttpClientService,patientInfo } from "src/app/service/http-client.service";
// import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/auth-layout.component';
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  patients:patientInfo;
  timeInterval: Subscription;
  constructor(private httpClientService: HttpClientService) { }
  ngOnInit() {

    // this.timeInterval = interval(5000).pipe(startWith(0),
    // switchMap(()=>this.httpClientService.getPatientInfo())).subscribe(
    //   response =>this.handleresponse(response),
    //   );
    // console.log("Calling");




    // this.httpClientService.getPatientInfo().subscribe(
    //   response =>this.handleresponse(response),
    //   );
      

  }
  handleresponse(response){
    this.patients=response;
    console.log(this.patients.name);

  }

}

  