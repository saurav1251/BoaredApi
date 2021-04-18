import { Component , OnInit} from '@angular/core';
import  { BoaredApiService} from '../app/Services/boared-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BoaredApi';
  readonly arrActvityType:{Key:string,Value:string}[]=[
    {Key:"", Value:"--Select--"},

    {Key:"education", Value:"Education"},
    {Key:"recreational", Value:"Recreational"},
    {Key:"social", Value:"Social"},
    {Key:"diy", Value:"Diy"},
    {Key:"charity", Value:"Charity"},
    {Key:"cooking", Value:"Cooking"},
    {Key:"relaxation", Value:"Relaxation"},
    {Key:"music", Value:"Music"},
    {Key:"busywork", Value:"Busywork"},
  ]
  ActivityTypeModel:{Key:string,Value:string};
  BoaredApiResult: {};
  constructor(private boaredApi:BoaredApiService){}
  ngOnInit(){
    this.ActivityTypeModel=this.arrActvityType.filter(x=>x.Key=="")[0];
   
  }
  onchangeActvityType(){
    if(this.ActivityTypeModel.Key=="")
    {
      this.BoaredApiResult="Please select a type."
      return;
    }
    this.BoaredApiResult="Loading...."

    this.boaredApi.getDataByType(this.ActivityTypeModel.Key).subscribe(x=>{
      this.BoaredApiResult=x;
    },
    err=>{
      this.BoaredApiResult="Error! Please try again."
    }
    );
  }
}
