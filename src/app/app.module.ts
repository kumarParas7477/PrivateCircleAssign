import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/Components/home/home.component';
import { BarComponent } from 'src/Components/bar/bar.component';
import { TableComponent } from 'src/Components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from 'src/Components/description/description.component';
import { ActioniconsComponent } from 'src/Components/actionicons/actionicons.component';
import { DateComponent } from 'src/Components/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    TableComponent,
    DescriptionComponent,
    ActioniconsComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
