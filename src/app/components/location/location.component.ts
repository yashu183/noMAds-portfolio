import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const letters: any = document.querySelector(
      'body > app-root > app-background > div > app-location > ngx-arc-text > div > span)'
    );
    letters.forEach((letter: { style: { color: string } }) => {
      letter.style.color = 'red';
    });
  }
  location = 'CHENNAI, INDIA';
  angle = 130;
  direction = -1;
}
