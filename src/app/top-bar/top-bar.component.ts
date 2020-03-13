import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})

export class TopBarComponent implements OnInit {

  private elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "a", "button", "input", "select", "i"];

  private maxFontSize = 5;
  private minFontSize = -5;
  
  element = document.getElementsByTagName("body")[0] as HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.checkHighContrast();
    this.checkFontSize();
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

  checkFontSize() {
    let size = 0;

    if (sessionStorage.getItem("size"))
      size = parseInt(sessionStorage.getItem("size"));

    if (size > 0)
      for (let i = 0; i < size; i++) {
        this.elements.forEach(e => this.changeFontSize(e, "increase"));
      }

    if (size < 0)
      for (let i = 0; i > size; i--) {
        this.elements.forEach(e => this.changeFontSize(e, "decrease"));
      }
  }

  changeFontSize(tagName, order) {
    let elements = document.getElementsByTagName(tagName);

    if(elements) {
      Array.from(elements).forEach(e => {

        let fontString = window.getComputedStyle(e, null).getPropertyValue("font-size");
        let fontNumber = parseInt(fontString);

        if (order === "increase")
          fontNumber++;
        else
          fontNumber--;

        e.style.fontSize = fontNumber.toString() + "px";
      })
    }
  }

  increaseFont() {
    let fontSize = 0;

    if (sessionStorage.getItem("fontSize"))
      fontSize = parseInt(sessionStorage.getItem("fontSize"));

    if (fontSize < this.maxFontSize) {
      this.elements.forEach(e => this.changeFontSize(e, "increase"));
      fontSize++;
    }
    sessionStorage.setItem("fontSize", fontSize.toString());
  }

  resetFont() {
    let fontSize = 0;

    if (sessionStorage.getItem("fontSize")) {
      fontSize = parseInt(sessionStorage.getItem("fontSize"));
    }

    while (fontSize < 0) {
      this.elements.forEach(e => this.changeFontSize(e, "increase"));
      fontSize++;
    }

    while (fontSize > 0) {
      this.elements.forEach(e => this.changeFontSize(e, "decrease"));
      fontSize--;
    }
    sessionStorage.setItem("fontSize", fontSize.toString());
  }

  decreaseFont() {
    let fontSize = 0;

    if (sessionStorage.getItem("fontSize"))
      fontSize = parseFloat(sessionStorage.getItem("fontSize"));

    if (fontSize > this.minFontSize) {
      this.elements.forEach(e => this.changeFontSize(e, "decrease"));
      fontSize--;
    }
    sessionStorage.setItem("fontSize", fontSize.toString());
  }



}
