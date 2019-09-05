import { Component } from '@angular/core'; 
import {interval, Subscription} from'rxjs'; 

@Component({
  selector: 'app-home', 
  templateUrl: 'home.page.html', 
  styleUrls: ['home.page.scss'], 
  }) 

  export class HomePage {

  constructor() {} 
  names;nameActually:String; 
  namesIngresed:Array<String>; 
  

//Generate names random 
setNames(){
var nam=Math.floor((Math.random()* this.namesIngresed.length)); 
this.nameActually=this.namesIngresed[nam]; 
console.log(this.nameActually) 
}

//Method by add names and show names of array
addName(){
this.namesIngresed =this.names.split(",") 
console.log(this.namesIngresed) 
this.setNames();
this.setInterval()
} 
//generate names in a determined time
setInterval(){
    setInterval(()=>{this.setNames()},2000);
  }

ngOnInit(){
if(this.namesIngresed != null){
this.setInterval()
}
this.nameActually="";
} 


}