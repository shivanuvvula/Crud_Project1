import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const materialComponents=[MatButtonModule,MatCardModule,MatIconModule,MatListModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialComponents],
  exports: [materialComponents]
})
export class AngularMaterialModule { }
