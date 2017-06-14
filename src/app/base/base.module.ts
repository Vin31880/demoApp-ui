import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {TranslateModule} from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class BaseModule { }
