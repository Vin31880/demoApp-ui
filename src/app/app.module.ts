import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {NavigationModule} from './navigation/navigation.module';
import {TranslateLoader, TranslateModule, TranslateStaticLoader} from 'ng2-translate';
import {TranslateInitializerService} from './common/translate-initializer.service';
import { WelcomeComponent } from './base/welcome/welcome.component';

export function customTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    NavigationModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (customTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [TranslateInitializerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
