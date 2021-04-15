import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from '../../components/hero';
import { PortfolioComponent, ProjectComponent } from '../../components/portfolio';
import { SkillComponent, SkillsComponent } from '../../components/skills';
import { ExperienceComponent } from '../../components/experience';
import { ContactComponent } from '../../components/contact';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    PortfolioComponent,
    ProjectComponent,
    SkillsComponent,
    SkillComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {
}
