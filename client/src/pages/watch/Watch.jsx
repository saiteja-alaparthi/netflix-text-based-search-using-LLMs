import React from 'react';

import './watch.scss';
import { ArrowBackIosOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

export default function Watch() {
  const { location } = useLocation();
  const movie = location.movie;

  return (
    <div className='watch'>
      <Link to="/">
      <div className='back'>
        <ArrowBackIosOutlined/>
      </div>
      </Link>
      <video
        className='video'
        autoPlay
        controls
        src={movie.video}
      />
    </div>
  );
}
