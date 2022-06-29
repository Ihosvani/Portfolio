import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

  projects: string[] = ["task manager.jfif"];
  projectDescription: string[] = ["Project Description"];

  constructor() { }

  ngOnInit(): void {
  }

}
