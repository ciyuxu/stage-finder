import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import fetchEvents from '../../actions/events/fetch'
import '../../styles/EventPage.css'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'


class EventPage extends PureComponent {

  componentWillMount(){
    this.props.fetchEvents()
  }

  renderEvent(event, index){
    return (
      <div key={index} className="event col-md-5 col-sm-6">
        <div className="event-box">
          <h2 className="event-name">{event.title}</h2>
          <br />

          <div className="event-content">
            <div className="event-date">
              <h3 className="date">{event.date.toString().slice(0,10)}</h3>
            </div>
            <div className="event-city">
              <h4 className="city">{event.venue.name}</h4>
            </div>
            <div className="event-city">
              <h4 className="city">{event.venue.city}</h4>
            </div>
            <div className="event-time">
              <p className="time">{event.time}</p>
            </div>
            <div className="event-description">
              <p className="description">{event.description}</p>
            </div>

              <button className="btn-event"><Link to={`/events/${event._id}`} className="link">View Event</Link></button>
          </div>
        </div>
      </div>

    )
  }

  render() {
    const events = this.props.events
    if (!events) return null
    return(
      <div>
      <Navbar />
        <h1>Discover the events</h1>
        <div className="events-container">
          <div className="row">
            { events.map(this.renderEvent.bind(this)) }
          </div>
        </div>
        <br />
        <br />
      </div>
    )
  }
}

const mapStateToProps = ({ events }) => ({ events })

export default connect(mapStateToProps, { fetchEvents })(EventPage)
