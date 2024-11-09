// src/app/models/appointment.model.ts
export class Appointment {
  constructor(
    public id: number,
    public customerId: number,
    public appointmentDate: Date,
    public appointmentReason: string,
    public appointmentStatus: string,
    public doctorId: number,
    public assistantId?: number,
    public notes?: string
  ) {}
}
