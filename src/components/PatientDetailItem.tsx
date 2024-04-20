type PatientDetailItemProps = {
  label: string
  data: string
}

const PatientDetailItem = ({ label, data }: PatientDetailItemProps) => {

  return (
    <p className="mb-2 last-of-type:mb-0">
      {label}: {""}
      <span className="font-bold">{data}</span>
    </p>
  )
}

export default PatientDetailItem