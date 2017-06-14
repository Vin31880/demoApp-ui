import {Component, OnInit} from '@angular/core';
import {TranslateInitializerService} from './common/translate-initializer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private translateInitializerService: TranslateInitializerService) {
  }

  ngOnInit() {
    this.translateInitializerService.init();
  }
}
