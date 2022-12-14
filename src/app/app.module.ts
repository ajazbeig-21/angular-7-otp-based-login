import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgOtpInputModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
