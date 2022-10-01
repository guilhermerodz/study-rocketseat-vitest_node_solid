type AppointmentProps = {
  customer: string
  startsAt: Date
  endsAt: Date
}

export class Appointment {
  private props: AppointmentProps

  constructor(props: AppointmentProps) {
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
