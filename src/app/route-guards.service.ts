import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private router_:Router) {}

  canActivate():boolean {
  	if(1==1)
  //  this.router_.navigate([''])
  return true;
    else
  //  return true;
    this.router_.navigate(['']);
  }

}
