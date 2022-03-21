import React from 'react';
import './App.css';
import LeftContainer from './components/timelineContainers/leftContainer';
import RightContainer from './components/timelineContainers/rightContainer';
import requestHandler from './components/utils/requestHandler';
import sleep from './components/utils/sleep';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.fetchEvents = this.fetchEvents.bind(this);
  }

  /**
   * Internal method for fetching events from "jsonplaceholder"
   */
  async fetchEvents() {
    let events = this.state.events;
    let odd = false;
    for (let i = 0; i < 99; i++) {
      let count = (i + 1);
      // Define parameters for API call
      let headers = {};
      let payload = {};
      let response = await requestHandler(
        `https://jsonplaceholder.typicode.com/posts/${count}`,
        headers,
        'GET',
        payload
      );
      if (response.status !== 200) {
        continue;
      }

      // log dummy event time
      let now = new Date();
      let time = now.toLocaleTimeString();

      // Add element to the beginning of the events list
      events.unshift({
        containerOdd: odd,
        title: response.response.title,
        time: time,
        description: response.response.body
      });

      // Remove last element from the events list
      if (events.length > 5) {
        events.pop();
      }
      this.setState({events: events});

      /**
       * Set the container odd value to define
       * the side it appears on in large displays
      */
      if (!odd) {
        odd = true;
      } else {
        odd = false;
      }

      // Rest for 5 minutes
      await sleep(5 * 60 * 1000);

    }
  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
        <h1 style={{
          textAlign: 'center',
          marginTop: '2%'
        }}>
          Event View
        </h1>
          {/* Timeline of events */}
          <div className="timeline">

            {
              this.state.events.map(
                (data) => {
                  if (!data.containerOdd) {
                    return (<LeftContainer
                      key={data.time}
                      title={data.title}
                      time={data.time}
                      description={data.description}
                    />);
                  } else {
                    return (<RightContainer
                      key={data.time}
                      title={data.title}
                      time={data.time}
                      description={data.description}
                    />);
                  }
                  
                }
              )
            }

          </div>
      </div>
    );
  }

}

export default App;
