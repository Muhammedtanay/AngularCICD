import { Component } from '@angular/core';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
  imports: [],
  templateUrl: './hakkimizda.component.html',
  styleUrl: './hakkimizda.component.css'
})
export class HakkimizdaComponent {

}
onSubmit() {
  // Form verilerini işle
  console.log("Form gönderildi.");
}
