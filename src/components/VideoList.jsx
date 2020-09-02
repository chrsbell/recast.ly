// import VideoListEntry from './VideoListEntry.js';
// import VideoPlayer from './VideoPlayer.js';

var VideoList = ({videos, onVideoTitleClick}) => {

  return (
    <div className="video-list">
      { videos.map((video, i) => (
        <VideoListEntry
          key={video.id.videoId}
          video={video}
          onVideoTitleClick= {onVideoTitleClick}
        />
      )
      )}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};



// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
// export default VideoList;
window.VideoList = VideoList;