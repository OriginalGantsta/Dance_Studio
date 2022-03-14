import { Component, OnInit } from '@angular/core';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faPhoneAlt = faPhoneAlt;

  awkwardScreen = {
    level1: false,
    level2: false,
    level3: false,
  };

  constructor() { }

  checkAwkwardScreen(){
    if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
      this.awkwardScreen.level1 = true;
    }
    else {this.awkwardScreen.level1 = false};

    if (window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.awkwardScreen.level2 = true;
    }
    else {this.awkwardScreen.level2 = false};

    if (window.innerWidth >= 768 && window.innerWidth <= 992) {
      this.awkwardScreen.level3 = true;
    }
    else {this.awkwardScreen.level3 = false}
  }

  ngOnInit(): void {
    this.checkAwkwardScreen();
    window.onresize = () => this.checkAwkwardScreen();
  }

}
