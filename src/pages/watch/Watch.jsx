import React from 'react';

import './watch.scss';
import { ArrowBackIosOutlined } from '@material-ui/icons';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackIosOutlined/>
      </div>
      <video
        className='video'
        autoPlay
        controls
        src='https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4'
      />
    </div>
  );
}
