import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


const MaterialModules = [   
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  FormsModule, ReactiveFormsModule,
  HttpClientModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,   
     ...MaterialModules
  ],
  exports: [
    ...MaterialModules
  ]
})
export class SharedModule { }
