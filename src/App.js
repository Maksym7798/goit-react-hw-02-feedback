import React, { Component } from 'react';
import Section from './Section/section';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Statistics from './Statistics/statistics';

export default class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    this.setState (state =>( {[e]: state[e] + 1}))
  }

  totalState = (state) => {
    return (state.good + state.neutral + state.bad)
}

  positiveFeedback = (good, total) => {
    return(Math.round(good / total * 100))
  }

  render(){
    return(
      <>
        <Section title = 'Please leave feedback'>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}
                           options={(Object.keys(this.state))}>
          </FeedbackOptions>
        </Section>

        <Section title = 'Statistics'>
          {this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0 ?
            <h3>No feedback given</h3> : 
            <Statistics good              = {this.state.good}
                        neutral           = {this.state.neutral}
                        bad               = {this.state.bad}
                        total             = {this.totalState(this.state)}
                        positiveFeedback  = {this.positiveFeedback(this.state.good, this.totalState(this.state))} 
                      /> 
          }
        </Section>
      </>
    
    )
}
}