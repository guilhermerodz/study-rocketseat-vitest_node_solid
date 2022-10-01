import { describe, expect, it } from 'vitest'
import { Appointment } from '../entities/appointment'
import { exampleProps } from '../entities/appointment.spec.util'
import { CreateAppointment } from './create-appointment'

describe('Create Appointment', () => {
  it('should be able to create an appointment', () => {
    const createAppointment = new CreateAppointment()

    expect(createAppointment.execute(exampleProps)).resolves.toBeInstanceOf(
      Appointment,
    )
  })
})
