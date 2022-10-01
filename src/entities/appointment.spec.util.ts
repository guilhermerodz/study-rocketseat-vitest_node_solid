import { Appointment } from "./appointment"

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const afterTomorrow = new Date()
afterTomorrow.setDate(tomorrow.getDate() + 1)

export const exampleProps: Readonly<
  ConstructorParameters<typeof Appointment>[0]
> = {
  customer: 'John Doe',
  startsAt: tomorrow,
  endsAt: afterTomorrow,
}