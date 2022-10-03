import { describe, expect, it } from 'vitest'
import { Appointment } from '../entities/appointment'
import { exampleProps } from '../entities/appointment.spec.util'
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointments-repository'
import { CreateAppointment } from './create-appointment'

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    expect(createAppointment.execute(exampleProps)).resolves.toBeInstanceOf(
      Appointment,
    )
  })
  it('should not be able to create an appointment with overlapping dates', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const props = exampleProps
    await createAppointment.execute(props)

    expect(createAppointment.execute(props)).rejects.toBeInstanceOf(Error)
  })
})
