import { Component, OnInit } from '@angular/core';
import { Main_Personal_Project, Main_School_Projects } from './personal_projects';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss']
})
export class PersonalProjectsComponent implements OnInit {

  main_personal_projects: Main_Personal_Project[] = [];
  main_school_projects: Main_School_Projects[] = [];

  constructor() { }

  ngOnInit(): void {
    let task_manager: Main_Personal_Project = {} as Main_Personal_Project;
    task_manager.completed = false;
    task_manager.github_url = "https://github.com/Ihosvani/Task-Manager";
    task_manager.name = "Task Manager";
    task_manager.picture = "../../assets/task_manager_logo.png";
    task_manager.url = "http://nextdaylist.com/"
    task_manager.stack = ["devicon-angularjs-plain colored", "devicon-typescript-plain", "devicon-html5-plain colored", "devicon-css3-plain-wordmark", "devicon-amazonwebservices-original", "devicon-nestjs-plain colored", "devicon-mongodb-plain colored", "devicon-graphql-plain colored"];
    task_manager.reward_experiences = ["This is a full stack web aplication, while the idea of a task manager is simple it increased my abilities with Angular, Nestjs, Prisma, Graphql and MongoDB", "I increased my knowledge on angular by creating multiple components, reusing those components in multiple pages, creating multiple services to talk to the backend, like authentication and storing, retrieving and deleting tasks", "For this project I also wanted to learn more about the basics of css and I used onle css and not a framework, since on my first school project I used bulma", "I also worked on authentication process, both on the frontend and backend, for my authentication service I used JWT. For my backend I used Nestjs, for communicating with it I used queries from Graphql, my ORM is Prisma and my database is MongoDB"];
    task_manager.system_design = "../../assets/system_design_task_manager.png";

    this.main_personal_projects.push(task_manager);
  }

}
