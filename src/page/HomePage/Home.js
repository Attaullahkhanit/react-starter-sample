import React from 'react';
import './styles.scss';
import { Typography } from '@mui/material';

function Home() {
    const newarray = [1,2,3,4,5,6,7,4,3,3,3,5]
    const uniqueSet = new Set(newarray)
     console.log(uniqueSet, 'my newarray value')
  return (
    <>
        <div className='top-nav'>
            <Typography>Let's begin the project from start</Typography>
        </div>
    </>
  )
}

export default Home