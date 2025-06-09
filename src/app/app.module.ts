import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Toastr annimation
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Components and
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaitenanceComponent } from './components/maitenance/maitenance.component';
import { HttpClient } from '@angular/common/http';

// HTTP
import { HttpClientModule } from '@angular/common/http';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { HomeComponent } from './components/home/home.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { GenerateReserveComponent } from './components/generate-reserve/generate-reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ErrorPageComponent,
    RegisterComponent,
    NavbarComponent,
    MaitenanceComponent,
    SearchFieldComponent,
    HomeComponent,
    ReserveComponent,
    ProfileComponent,
    FooterComponent,

    GenerateReserveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
