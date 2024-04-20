type PatientDetailItemProps = {
  label: string
  data: string
}

const PatientDetailItem = ({ label, data }: PatientDetailItemProps) => {

  return (
    <p>
      {label}: {""}
      <span className="font-bold">{data}</span>
    </p>
  )
}

export default PatientDetailItem