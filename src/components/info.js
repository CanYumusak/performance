import React from 'react'
import StoryPointChart from './storypointchart'

const info = (props) => {
  return (
    <div className='container'>
      <div className='display-3' style={{ color: '#FF8A00' }}>
      </div>
      <div className='h1 code mt-4 mb-3'>{'Story Point'}</div>

      <StoryPointChart
        queriedUser={props.queriedUser} />
    </div>
  )
}

export default info