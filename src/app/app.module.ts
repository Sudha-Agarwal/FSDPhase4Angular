import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MobileListComponent } from './product-list/mobile-list/mobile-list.component';
import { LaptopListComponent } from './product-list/laptop-list/laptop-list.component';
import { MobileDetailsComponent } from './product-list/mobile-details/mobile-details.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { AuthenticationGuard } from './authentication.guard';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ProductListComponent,
    MobileListComponent,
    LaptopListComponent,
    MobileDetailsComponent,
    LoginFormComponent,
    ModelFormComponent,
    CourseComponent,
    CourseDetailComponent,
    AddCourseComponent,
    AppHighlightDirective,
    FilterPipe    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
