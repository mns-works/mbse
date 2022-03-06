import React, { FunctionComponent } from 'react'

const style = {
  container: {
    color: '#B36785',
  },
}

const Colored: FunctionComponent = function Colored(props) {
  const { children } = props
  return <span style={style.container}>{children}</span>
}

export default Colored
