import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LspatientListComponent } from './components/lspatient-list/lspatient-list.component';
import { BackendService } from './services/backend.service';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
import { MatToolbarModule} from "@angular/material/toolbar";
import { LspatientNewComponent } from './lspatient-new/lspatient-new.component';
import { LspatientInactiveComponent } from './lspatient-inactive/lspatient-inactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LspatientListComponent,
    LspatientNewComponent,
    LspatientInactiveComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatToolbarModule

  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
