import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchEvents = this.fetchEvents.bind(this);
  }

  /**
   * Internal method for fetching events from "jsonplaceholder"
   */
  fetchEvents() {

  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
          {/* Timeline of events */}
          <div className="timeline">
            {/* Code for left hand side timeline */}
            <div className="timelineContainer timelineLeft">
              <div className="innerContent">
                <div>
                  <h2>Title 1</h2>
                  <p>
                    Time...
                  </p>
                  <br/>
                  <p>
                    Description 1...
                  </p>
                </div>
              </div>
            </div>
  
            {/* Code for right hand side timeline */}
            <div className="timelineContainer timelineRight">
              <div className="innerContent">
                <div>
                <h2>Title 2</h2>
                  <p>
                    Time...
                  </p>
                  <br/>
                  <p>
                    Description 2...
                  </p>
                </div>
              </div>
            </div>
  
            {/* Code for left hand side timeline */}
            <div className="timelineContainer timelineLeft">
              <div className="innerContent">
                <div>
                <h2>Title 3</h2>
                  <p>
                    Time...
                  </p>
                  <br/>
                  <p>
                    Description 3...
                  </p>
                </div>
              </div>
            </div>
  
            {/* Code for right hand side timeline */}
            <div className="timelineContainer timelineRight">
              <div className="innerContent">
                <div>
                <h2>Title 4</h2>
                  <p>
                    Time...
                  </p>
                  <br/>
                  <p>
                    Description 4...
                  </p>
                </div>
              </div>
            </div>
  
            {/* Code for left hand side timeline */}
            <div className="timelineContainer timelineLeft">
              <div className="innerContent">
                <div>
                <h2>Title 5</h2>
                  <p>
                    Time...
                  </p>
                  <br/>
                  <p>
                    Description 5...
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }

}

export default App;
