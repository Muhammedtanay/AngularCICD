import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hakkimizda',
  templateUrl: './hakkimizda.component.html',
  styleUrl: './hakkimizda.component.css',
  imports: [ReactiveFormsModule, FormsModule ],
  
})
export class HakkimizdaComponent {
appointment = {
    customerId: null,
    appointmentDate: null,
    appointmentReason: null,
    appointmentStatus: null,
    doctorId: null
  };
 name = new FormControl('');
  onSubmit() {
    // Form gönderildiğinde yapılacak işlemler
    console.log('Form gönderildi:', this.appointment);
  }
}
