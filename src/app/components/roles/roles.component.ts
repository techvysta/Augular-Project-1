import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {
  //string,number,boolean,object,array,null, undefined
  firstName: string = "Angular Tutorial";
  angularVersion = "version 19";

    version : number = 18;

    isActive : boolean = false;

    currentDate : Date = new Date();
    

  }
