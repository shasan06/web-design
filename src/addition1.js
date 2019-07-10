import React from 'react';
import './addition1.css';

const Addition1 =  React.forwardRef((props, ref)  => {
  return (
    <img ref={ref} className="chick" src="duck_1.jpg"/>


  );
}
)
export default Addition1;
