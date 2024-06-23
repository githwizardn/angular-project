import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';

import { DummyApiService } from './services/dummy-api.service'; // Import DummyApiService

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardCarouselComponent,
    MenuComponent,
    FooterComponent,
    BookingFormComponent,
    AboutComponent,
    TeamComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule, // Add HttpClientModule here
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    DummyApiService // Provide the DummyApiService here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
