import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt: new Date(),
    endsAt: new Date(),
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})
