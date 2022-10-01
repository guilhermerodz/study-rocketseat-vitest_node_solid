type AppointmentProps = {
  customer: string
  startsAt: Date
  endsAt: Date
}

export class Appointment {
  private props: AppointmentProps

  constructor(props: AppointmentProps) {
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
