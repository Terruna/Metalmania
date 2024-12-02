import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

public img:string = "assets/logo.png";
public menuimg:string = "assets/menu.png";

isSecondDivVisible = false;

showSecondDiv() {
  this.isSecondDivVisible = true;
}

hideSecondDiv() {
  this.isSecondDivVisible = false;
}
}
