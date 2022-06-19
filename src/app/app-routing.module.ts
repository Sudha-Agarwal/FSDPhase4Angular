import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ProductListComponent } from './product-list/product-list.component';
import { MobileListComponent } from './product-list/mobile-list/mobile-list.component';
import { LaptopListComponent } from './product-list/laptop-list/laptop-list.component';
import { MobileDetailsComponent } from './product-list/mobile-details/mobile-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthenticationGuard } from './authentication.guard';
import { IncompleteGuard } from './incomplete.guard';
//import { AdminModule } from './admin/admin.module';


const routes: Routes = [  
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:"home", component: HomeComponent},
    {path:"products", component: ProductListComponent,
    children:[
      {path:"", redirectTo: "", pathMatch: 'full'},
       {path:"mobile-list", component: MobileListComponent},
        {path:"laptop-list", component: LaptopListComponent},
         {path:"mobile-details/:id", component: MobileDetailsComponent},
    ]
},
  {path:"about", component: AboutComponent},
  {path:'login-form', component:LoginFormComponent},
  {path:'signup-form', component:ModelFormComponent},
  {path:'course', component:CourseComponent, canActivate: [AuthenticationGuard],
canDeactivate:[IncompleteGuard]},
  {path:'course-detail/:id', component:CourseDetailComponent},
  {path:'add-course', component:AddCourseComponent},
  {path:'admin', loadChildren: () => import("./admin/admin.module").then(module => module.AdminModule)}
  
  
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
