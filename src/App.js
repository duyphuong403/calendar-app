import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SweetAlert from 'react-bootstrap-sweetalert';
// import Year from './components/Year';

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Data from './todo_data.json';
import CustomToolbar from './components/CustomToolbar'

const localizer = momentLocalizer(moment);
localizer.formats.yearHeaderFormat = 'YYYY'

class App extends Component {
  state = {
    events: [],
    alert: null
  };
  componentDidMount = () => {
    for (const year in Data) {
      for (const element in Data[year]) {
        this.state.events.push({
          start: Data[year][element].date,
          end: Data[year][element].date,
          title: Data[year][element].title,
          description: Data[year][element].description,
          status: Data[year][element].status
        })
      }
    }
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleEventClick = (event) => {
    const getAlert = () => (
      <SweetAlert
        title={event.start}
        onConfirm={() => this.hideAlert()}
      >
        <p>status: <b>{event.status}</b></p>
        <h3>{event.title}</h3>
        <br />
        {event.description}
      </SweetAlert>
    )
    this.setState({
      alert: getAlert()
    });
  }

  // Set event color by status
  eventStyleGetter = (event) => {
    switch (event.status) {
      case "in progress":
        return {
          style: {
            backgroundColor: "#e3f10a",
            color: "#000000"
          }
        }
      case "not started yet":
        return {
          style: {
            backgroundColor: "#93938b"
          }
        }
      case "not completed":
        return {
          style: {
            backgroundColor: "#fb0202"
          }
        }
      case "completed":
        return {
          style: {
            backgroundColor: "#50ad31"
          }
        }
      case "pending":
        return {
          style: {
            backgroundColor: "#e002fb"
          }
        }
      default:
        return {
          style: {
            backgroundColor: "#337ab7"
          }
        }
    }
  }

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          drilldownView="agenda"
          views={{
            month: true,
          }}
          onSelectEvent={event => this.handleEventClick(event)}
          eventPropGetter={event => this.eventStyleGetter(event)}
          components={{ toolbar: CustomToolbar }}
        />
        {this.state.alert}
      </div>
    );
  }
}

export default App;
