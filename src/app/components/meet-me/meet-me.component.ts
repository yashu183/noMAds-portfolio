import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-me',
  templateUrl: './meet-me.component.html',
  styleUrls: ['./meet-me.component.css'],
})
export class MeetMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  meetMe() {
    window.open('https://www.facebook.com/profile.php?id=100011492925176');
  }
}
