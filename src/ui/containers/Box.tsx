import React from 'react'
import { FunctionComponent, PropsWithChildren } from 'react'

import styles from 'styles/ui/containers/box.module.css'

interface BoxProps {}
const Box: FunctionComponent<PropsWithChildren<BoxProps>> = ({ children }) => {
  return <div>{children}</div>
}

export default Box
