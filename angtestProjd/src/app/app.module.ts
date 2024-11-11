import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
@NgModule({
  declarations: [
    HakkimizdaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HakkimizdaComponent]
})
export class AppModule { }
