import { Component } from '@angular/core';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
  imports: [],
  templateUrl: './hakkimizda.component.html',
  styleUrl: './hakkimizda.component.css'
})
export class HakkimizdaComponent {

appointment = {
    customerId: '',
    appointmentDate: '',
    appointmentReason: '',
    appointmentStatus: '',
    doctorId: ''
  };

onSubmit() {

  console.log("Form gönderildi.");
}
}
