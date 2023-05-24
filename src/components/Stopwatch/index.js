import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    sec: 0,
    min: 0,
    start: true,
  }

  counter = () => {
    const {sec, min, start} = this.state
    if (start === true) {
      if (sec === 0 || sec <= 59) {
        this.setState(prevState => ({sec: prevState.sec + 1}))
      }
      if (sec === 59) {
        this.setState({sec: 0})
      }
      if (sec === 59) {
        this.setState(prevState => ({min: prevState.min + 1}))
      }
    }
  }

  timerStart = () => {
    this.intervalId = setInterval(this.counter, 1000)
  }

  onStop = () => {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    this.setState({sec: 0, min: 0})
    clearInterval(this.intervalId)
  }

  render() {
    const {sec, min} = this.state
    const finalSec = sec < 10 ? `0${sec}` : sec
    const finalMin = min < 10 ? `0${min}` : min
    return (
      <div className="bg-color">
        <h1 className="heading">Stopwatch</h1>
        <div className="time-div">
          <div className="for-flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <p className="paragraph">Timer</p>
          </div>
          <h1 className="timer-heading">
            {finalMin}:{finalSec}
          </h1>
          <div>
            <button
              className="start-button"
              type="button"
              onClick={this.timerStart}
            >
              start
            </button>
            <button className="stop-button" type="button" onClick={this.onStop}>
              stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.onReset}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
