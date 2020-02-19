import './VideoItem.css';
import React from "react";


class VideoItem extends React.Component {
    render() {
        let video = this.props.video;
        return (
            <div className="video-item">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={video.snippet.thumbnails.medium.url} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h6 className="card-title">{video.snippet.title}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;