import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgrammingSkillsComponent } from './programming-skills/programming-skills.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PersonalProjectsComponent,
    ResumeComponent,
    AboutComponent,
    ContactMeComponent,
    ProfileComponent,
    ProgrammingSkillsComponent,
    EducationComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
