import React from 'react'
import { useSelector } from 'react-redux'

const HeaderComponent = () => {
  const count = useSelector(state => state.counter.count);

  return (
    <div style={{
      backgroundColor: 'aqua',
    }}>
      HeaderComponent: {count}
    </div>
  )
}

export default HeaderComponent
