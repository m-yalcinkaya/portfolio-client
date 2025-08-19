import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './admin/layout/layout';
import { Dashboard } from './admin/components/dashboard/dashboard';

const routes: Routes = [
  {
    path: 'admin',
    component: Layout,
    children: [
      { path: '', component: Dashboard },
      {
        path: 'projects',
        loadChildren: () =>
          import('./admin/components/projects/projects-module').then(
            (module) => module.ProjectsModule
          ),
      },
      {
        path: 'blogs',
        loadChildren: () =>
          import('./admin/components/blogs/blogs-module').then(
            (module) => module.BlogsModule
          ),
      },
      {
        path: 'certificates',
        loadChildren: () =>
          import('./admin/components/certificates/certificates-module').then(
            (module) => module.CertificatesModule
          ),
      },

      {
        path: 'schools',
        loadChildren: () =>
          import('./admin/components/schools/schools-module').then(
            (module) => module.SchoolsModule
          ),
      },
      {
        path: 'skills',
        loadChildren: () =>
          import('./admin/components/skills/skills-module').then(
            (module) => module.SkillsModule
          ),
      },
      {
        path: 'languages',
        loadChildren: () =>
          import('./admin/components/languages/languages-module').then(
            (module) => module.LanguagesModule
          ),
      },
      {
        path: 'coverletters',
        loadChildren: () =>
          import('./admin/components/cover-letters/cover-letters-module').then(
            (module) => module.CoverLettersModule
          ),
      },
      {
        path: 'experiences',
        loadChildren: () =>
          import('./admin/components/experiences/experiences-module').then(
            (module) => module.ExperiencesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
