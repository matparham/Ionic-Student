import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapeter 1 | The Begining",
      url: "/chapeter1"
    },
    {
      title: "Chapeter 2 | The Middle",
      url: "/chapeter2"
    },
    {
      title: "Chapeter 3 | The End",
      url: "/chapeter3"
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
