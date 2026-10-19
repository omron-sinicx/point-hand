import React from 'react';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.video) return null;
    const wrapperClass = {
      overflow: 'hidden',
      paddingBottom: '56.25%',
      position: 'relative',
      height: 0,
    };
    const innerClass = {
      left: 0,
      top: 0,
      height: '100%',
      width: '100%',
      position: 'absolute',
    };
    return (
      <div className="uk-section uk-padding-remove-top">
        {/* No heading: the video is the Overview in video form, right below it. */}
        <span id="video" />
        <div style={wrapperClass}>
          <iframe
            style={innerClass}
            className="uk-align-center uk-width-1-1"
            src={this.props.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}
