import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  personalDescription: string = "I am an ambitious and driven software engineer. Driven by new knowledge and willing to learn any new technology related with Computer Science"

  constructor() { }

  ngOnInit(): void {
  }

}
