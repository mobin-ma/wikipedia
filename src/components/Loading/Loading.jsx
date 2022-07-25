import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading-wrapper'>
        <p className='text-loading'>loading...</p>
        <div className='loading'></div>
    </div>
  )
}

export default Loading;