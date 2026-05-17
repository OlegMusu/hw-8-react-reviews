import Statistics from './Components/Statistics/Statistics'
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions'
import Section from './Components/Section/Section'
import { Component } from 'react'
import './App.css'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const {good, bad} = this.state
    return good + bad
  }

  handleCount = (type) => {
    this.setState((prev) => ({
      [type]: prev[type] + 1
    }))
  }

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state
    return (
      Math.floor((good / this.countTotalFeedback()) * 100)
    )
  }

  render() {

    const {good, neutral, bad} = this.state

    const option = Object.keys(this.state)

    return (
      <>
      <Section title="please leave feedback">
        <FeedbackOptions options={option} onLeaveFeedback={this.handleCount}/>
      </Section>
      <Section title="Statistics">
        {this.countPositiveFeedbackPercentage()>0? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : "There is no feedback"}
      </Section>
      </>
    )
  } 
}

export default App
