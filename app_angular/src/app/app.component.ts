import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor () {}

  public title:string = "Utilized capacity of available nodes on bwUniCluster per HAW";

  public showUsers:boolean = false;
  public switchBtnName: string = 'Unis';

  toggleUsers() {
    this.showUsers = !this.showUsers;
    this.switchBtnName = this.showUsers ? "Users" : "Unis";
  }
}
