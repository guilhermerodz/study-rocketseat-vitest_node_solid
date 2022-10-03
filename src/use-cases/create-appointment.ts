import { Appointment, AppointmentProps } from '../entities/appointment'
import { exampleProps } from '../entities/appointment.spec.util'
import { AppointmentsRepository } from '../repositories/appointments-repository'

// DTO Types
type CreateAppointmentRequest = AppointmentProps
type CreateAppointmentResponse = Appointment

export class CreateAppointment {
  constructor(private appointmentsRepository: AppointmentsRepository) {}

  async execute(
    request: CreateAppointmentRequest,
  ): Promise<CreateAppointmentResponse> {
    const { startsAt, endsAt } = request

    const overlappingAppointment =
      await this.appointmentsRepository.findOverlappingAppointment(
        startsAt,
        endsAt,
      )

    if (overlappingAppointment) {
      throw new Error('Found another appointment that overlap intervals')
    }

    const appointment = new Appointment(exampleProps)

    await this.appointmentsRepository.create(appointment)

    return new Appointment(request)
  }
}
