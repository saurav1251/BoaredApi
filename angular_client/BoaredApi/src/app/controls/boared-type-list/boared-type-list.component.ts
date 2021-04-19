import { Component, OnInit, Output, EventEmitter, OnDestroy  } from '@angular/core';
import  { BoaredApiService} from '../../Services/boared-api.service';

@Component({
  selector: 'app-boared-type-list',
  templateUrl: './boared-type-list.component.html',
  styleUrls: ['./boared-type-list.component.scss']
})
export class BoaredTypeListComponent implements OnInit {
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
  @Output() boaredApiResultEvent = new EventEmitter<any>();
  ActivityTypeModel:{Key:string,Value:string};
  BoaredApiResult: {};
  
  constructor(private boaredApi:BoaredApiService) { }

  ngOnInit(){
    this.ActivityTypeModel=this.arrActvityType.filter(x=>x.Key=="")[0];
    this.boaredApiResultEvent.emit("Please select a type.");
  }
  ngOnDestroy(){
    this.boaredApiResultEvent.unsubscribe();
  }
  onchangeActvityType(){
    if(this.ActivityTypeModel.Key=="")
    {
      this.boaredApiResultEvent.emit("Please select a type.");
      return;
      
    }
    this.boaredApiResultEvent.emit("Loading....");

    this.boaredApi.getDataByType(this.ActivityTypeModel.Key).subscribe(x=>{
      this.boaredApiResultEvent.emit(x);
    },
    err=>{
      this.boaredApiResultEvent.emit("Error! Please try again.");
    }
    );
  }
 
}
