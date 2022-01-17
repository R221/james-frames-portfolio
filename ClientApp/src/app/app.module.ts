import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ImageComponent } from './images/image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './images/image-detail/image-detail.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageFilterPipe } from './images/shared/filter.pipe';
import { ImageService } from './images/shared/image.service';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ImageComponent,
    GalleryComponent,
    ImageDetailComponent,
    AboutComponent,
    ImageFilterPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Gallery', component: GalleryComponent },
    ]),
    FontAwesomeModule,
    AppRoutingModule    
  ],
  providers: [ImageFilterPipe, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
