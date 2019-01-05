import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimAddComponent } from './claim-add/claim-add.component';
import { ClaimDetailComponent } from './claim-detail/claim-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  MatFormFieldModule } from '@angular/material';
  import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';


@NgModule({
  declarations: [
    AppComponent,
    ClaimsComponent,
    ClaimAddComponent,
    ClaimDetailComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  AppRoutingModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatToolbarModule,
  AmplifyAngularModule
],

  providers: [MatDatepickerModule, DatePipe, AmplifyService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
