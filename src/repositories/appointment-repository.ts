import { Appointment } from '../entities/appointment'

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>
  save(appointment: Appointment): Promise<void>
}
