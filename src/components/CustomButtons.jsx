import React from 'react';
import { styled } from '@mui/system';

const MyComponent = styled('button')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  cursor: 'pointer',
  border: 'none',
  // width: 100,
  transition: "background 1s, color 1s",
  '&:hover': {
    backgroundColor: '#f00',
    color: '#fff',
  }
});

const CustomButtons = () => {
  return (
    <div>
      <MyComponent>Styled</MyComponent>
    </div>
  )
}

export default CustomButtons
