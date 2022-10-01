import { expect, test } from 'vitest'
import { Appointment } from './appointment'

test('create an appointment', () => {
  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt: new Date(),
    endsAt: new Date(Date.now() + 1),
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment that ends before it starts', () => {
  const startsAt = new Date()
  const endsAt = new Date(startsAt.getTime() - 1)

  expect(
    () =>
      new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt,
      }),
  ).toThrow()
})
