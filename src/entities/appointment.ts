import z from 'zod'

export const AppointmentSchema = z.object({
  customer: z.string(),
  startsAt: z.date(),
  endsAt: z.date(),
})

export type AppointmentProps = z.infer<typeof AppointmentSchema>

export class Appointment {
  private props: AppointmentProps

  constructor(props: AppointmentProps) {
    AppointmentSchema.parse(props)

    if (props.startsAt >= props.endsAt) {
      throw new Error('Invalid end date')
    }

    this.props = props
  }

  get customer() {
    return this.props.customer
  }

  get startsAt() {
    return this.props.startsAt
  }

  get endsAt() {
    return this.props.endsAt
  }
}
