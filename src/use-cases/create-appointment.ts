import { Appointment, AppointmentProps } from '../entities/appointment'

// DTO Types
type CreateAppointmentRequest = AppointmentProps
type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  async execute(
    request: CreateAppointmentRequest,
  ): Promise<CreateAppointmentResponse> {
    return new Appointment(request)
  }
}
