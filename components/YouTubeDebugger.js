const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };

    this.bitrateChange = this.bitrateChange.bind(this);
    this.resolutionChange = this.resolutionChange.bind(this);
  }

  bitrateChange() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    });
  }

  resolutionChange() {
    this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, {
            resolution: '720p'
          })
        }),
      });
  }

  render() {
    return (
      <div>
      <button className="bitrate" onClick={this.bitrateChange}></button>
      <button className="resolution" onClick={this.resolutionChange}></button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger;

// const React = require('react');
// class YouTubeDebugger extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       errors: [],
//       user: null,
//       settings: {
//         bitrate: 8,
//         video: {
//           resolution: '1080p'
//         }
//       }
//     };
//
//     this.handleChangeBitrate = this.handleChangeBitrate.bind(this);
//     this.handleChangeResolution = this.handleChangeResolution.bind(this);
//   }
//
//   handleChangeBitrate() {
//     this.setState({
//       settings: Object.assign({}, this.state.settings, {
//         bitrate: 12
//       }),
//     });
//   }
//
//   handleChangeResolution() {
//     this.setState({
//       settings: Object.assign({}, this.state.settings, {
//         video: Object.assign({}, this.state.settings.video, {
//           resolution: '720p'
//         })
//       }),
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <button className="bitrate" onClick={this.handleChangeBitrate}>Change bitrate</button>
//         <button className="resolution" onClick={this.handleChangeResolution}>Change resolution</button>
//       </div>
//     );
//   }
// }
//
// module.exports = YouTubeDebugger;
