import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}
const Error = ({ children }: ErrorProps) => {

  return (
    <p className="text-xl bg-red-700 text-white text-center my-3 py-2 rounded-lg">{children}</p>
  )
}

export default Error