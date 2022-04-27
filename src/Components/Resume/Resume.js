import React, { useState } from 'react';

function Resume(props) {
  const [selectedBulletIndex, setselectedBulletIndex] = useState(0)
  const [carousalOffSetStyle, setcarousalOffSetStyle] = useState({})

  return (
    <div className='resume-container screen-container'>
      <div className="resume-content">
         
      </div>
    </div>
  );
}

export default Resume;