import React from 'react';
import '../../App.css';

class RightContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="timelineContainer timelineRight">
        <div className="innerContent">
          <div>
            <h2>
              {this.props.title}
            </h2>
            <p>
              {this.props.time}
            </p>
            <br/>
            <p>
              {this.props.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

}

export default RightContainer;
