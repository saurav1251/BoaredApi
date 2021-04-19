import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoaredTypeListComponent } from './controls/boared-type-list/boared-type-list.component';
import { BoaredResultConsoleComponent } from './controls/boared-result-console/boared-result-console.component';

@NgModule({
  declarations: [
    AppComponent,
    BoaredTypeListComponent,
    BoaredResultConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
