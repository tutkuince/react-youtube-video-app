import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render() {
        return (
            this.props.videos.map((video) => {
                return <VideoItem key={video.id.videoId} video={video}/>;
            })
        );
    }
}

export default VideoList;