import React from 'react';

const VideoListItem = ({video}) => {
  //const video = prop.video;

  return (
    <li className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" />
        </div>
        
        <div className="media-body">
          <div className="media-heading" />
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
