import { Injectable } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Injectable()
export class TranslateInitializerService {

  constructor(private translateService: TranslateService) { }

  init() {
    const langs = ['en', 'de'];
    this.translateService.addLangs(langs);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en').subscribe(() => {
      this.translateService.use(this.calculateInitialLanguage());
    }); // workaround to load the default language for fallback
  }

  calculateInitialLanguage() {
    let language: string;

    const browserLanguage = this.translateService.getBrowserLang();
    if (this.translateService.getLangs().indexOf(browserLanguage) >= 0) {
      language = browserLanguage;
    } else {
      language = 'en';
    }

    return language;
  }
}
