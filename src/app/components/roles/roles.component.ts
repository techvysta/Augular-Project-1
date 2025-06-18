import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit{

  roleList: IRole[] = [];
  http = inject(HttpClient);

//constructor(private http: httpClient){

//}


ngOnInit(): void {
  
}


getAllRoles(){
 this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
 this.roleList = res.data;
 })
 
}





































  //string,number,boolean,object,array,null, undefined
  //firstName: string = "Angular Tutorial";
  //angularVersion = "version 19";

    //version : number = 18;

    //isActive : boolean = false;

    //currentDate : Date = new Date();
    
    //inputType: string = "button";

    //selectedState: string = '';

    //showWelcomeAlert ()
    //{
      //alert("Welcome to Angular 18 tutorial")
    //}

    //showMessage(message: string){
      //alert(message)
    //}










  }