import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { APP_DECLARATIONS } from './app.declarations';
import { APP_ENTRY_COMPONENTS } from './app.entry-components';
import { APP_IMPORTS } from './app.imports';
import { APP_PROVIDERS } from './app.providers';

@NgModule({
  declarations: [AppComponent, APP_DECLARATIONS],
  entryComponents: [APP_ENTRY_COMPONENTS],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'paycap' }),
    BrowserAnimationsModule,
    APP_IMPORTS
  ],
  providers: [...APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
