import { FunctionComponent, PropsWithChildren } from "react"

interface HeaderProps {
}

const Footer: FunctionComponent<PropsWithChildren<HeaderProps>> = () => {
  return (
    <div>

    </div>
  )
}


// css class for the parent div
const parent = {
  position: "fixed",
  bottom: "0",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  backgroundColor: "#f5f8fa",
  width: "100%",
  height: "40px",
  gap: "15px",
  padding: "0 30px",
  zIndex: "100",
}

export default Footer;