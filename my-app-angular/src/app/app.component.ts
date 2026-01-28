import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app-angular';
  name = 'Renan';
  imageUrl = 'https://t3.ftcdn.net/jpg/05/23/65/72/360_F_523657298_5BMXC0vFiIXLWq6hyGTBaNyc0TKeof0P.jpg';
  isLoggedIn = false;
  items = ["Item A", "Item B", "Item C", "Item D", "Item E", "Item F"];
  isActive = false;
  textColor = "green";
  fontSize = 50;

  clickButton(){
    console.log("Button Clicked");
    this.name = "Ronaldo";
    this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvtCbeyt3KuuZtOTAwWXLNRt_CTxxx59Yzg&s";
    this.isActive = true;
    this.textColor = "red";
    this.fontSize--;
  }

  logout(){
    this.isLoggedIn = false;
  }

  login(){
    this.isLoggedIn = true;
  }

}
