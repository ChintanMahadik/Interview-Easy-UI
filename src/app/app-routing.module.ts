import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'categories', component:CategoriesComponent},
{path:'footer', component:FooterComponent},
{path:'module/:categoryName', component:ModuleComponent},
{path:'content/:moduleName', component:ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
