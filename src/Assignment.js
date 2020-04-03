import React from 'react';

function Assignment({ details }) {
  console.log('Assignment')
  return (
    <div>
      <h2>Assignment for Today</h2>
      <p>{details}</p>
      
    </div>
  )
}

export default Assignment