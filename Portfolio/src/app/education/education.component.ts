import { Component, OnInit } from '@angular/core';
import { Education } from './education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  educations: Education[] = [];


  ngOnInit(): void {

    let FIU: Education = {} as Education;

    FIU.career = "Computer Science";
    FIU.logo = "../../assets/fiu_logo.png";
    FIU.endDate = new Date();
    FIU.endDate.setFullYear(2023);
    FIU.endDate.setMonth(5);
    FIU.endDate.setDate(13)
    FIU.startDate = new Date();
    FIU.startDate.setFullYear(2019);
    FIU.startDate.setMonth(6);
    FIU.startDate.setDate(13)
    FIU.experiences = ["Mainly focused on software engineering, algorithms, and databases", "My capstone project was developing a website project of FIU where users can create  pipelines of code or run their data through these pipelines to either clean or analyze it. I was the capstone leader and by using the scrum methodology I was able to lead my group of 6 students to follow the methodology and deliver our part of the product finished . Our part of the product was mainly making a full stack application to handle the creation, deletion or modification of users, the login and registration pages and the creation, deletion, and modifications of the pipelines of code.", "On both of my software engineering projects I was the scrum master and leader of the projects. The first project consisted of creating an API for a library in where users would create, delete, and manage authors and books of a library. On my second project my team created a web app called Legacy Tree where users could create obituaries and biographies of their relatives or friends to share with the world.", "In conclusion I these projects gave me the insight of what I wanted to do once I graduated from FIU, which is work and learn more about the creation of websites and apps."];
    FIU.gpa = 3.7;
    FIU.name = "FIU";
    this.educations.push(FIU);

  }

}
