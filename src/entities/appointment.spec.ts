import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { exampleProps } from './appointment.spec.util'

test('create an appointment', () => {
  const appointment = new Appointment(exampleProps)

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment that starts before now', () => {
  const startsAt = new Date(Date.now() - 1)

  expect(
    () =>
      new Appointment({
        ...exampleProps,
        startsAt,
      }),
  ).toThrow()
})

test('cannot create an appointment that ends before it starts', () => {
  const endsAt = new Date(exampleProps.startsAt.getTime() - 1)

  expect(
    () =>
      new Appointment({
        ...exampleProps,
        endsAt,
      }),
  ).toThrow()
})

test('cannot create an appointment by using the wrong DTO', () => {
  const props = { ...exampleProps }
  // @ts-expect-error
  delete props.customer

  expect(() => new Appointment(props)).toThrow()
})
