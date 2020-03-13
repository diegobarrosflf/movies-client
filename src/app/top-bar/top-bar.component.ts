import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})

export class TopBarComponent implements OnInit {
  
  element = document.getElementsByTagName("body")[0] as HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.checkHighContrast();
  }  

  checkHighContrast() {
    if (sessionStorage.getItem("highContrast") && sessionStorage.getItem("highContrast") === "true")
      this.element.classList.add("high-contrast");
    else
      this.element.classList.remove("high-contrast");
  }

  changeHighContrast() {
    if (sessionStorage.getItem("highContrast") && sessionStorage.getItem("highContrast") === "true") {

      sessionStorage.setItem("highContrast", "false");
      this.element.classList.remove("high-contrast");
    } else {
      sessionStorage.setItem("highContrast", "true");
      this.element.classList.add("high-contrast");
    }
  }

}
