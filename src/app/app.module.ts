import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SharedModule } from './components/shared';
import { PageNotFoundModule } from './pages/page-not-found';
import { HomeModule } from './pages/home';
import { FadeInDirective } from './directives/fade-in.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FadeInDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PageNotFoundModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
