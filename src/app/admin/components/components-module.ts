import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Components } from './components';
import { BlogsModule } from './blogs/blogs-module';
import { CertificatesModule } from './certificates/certificates-module';
import { CoverLettersModule } from './cover-letters/cover-letters-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { ExperiencesModule } from './experiences/experiences-module';
import { LanguagesModule } from './languages/languages-module';
import { ProjectsModule } from './projects/projects-module';
import { SchoolsModule } from './schools/schools-module';
import { SkillsModule } from './skills/skills-module';
import { AppRoutingModule } from '../../app-routing-module';

@NgModule({
  declarations: [Components],
  imports: [
    CommonModule,
    CertificatesModule,
    CoverLettersModule,
    DashboardModule,
    ExperiencesModule,
    LanguagesModule,
    ProjectsModule,
    SchoolsModule,
    SkillsModule,
    BlogsModule,
    AppRoutingModule,
  ],
})
export class ComponentsModule {}
