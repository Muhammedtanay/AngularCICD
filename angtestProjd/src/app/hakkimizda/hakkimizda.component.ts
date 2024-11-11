import { Component } from '@angular/core';

@Component({
  selector: 'app-hakkimizda',
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
