import { Component } from 'react'
import './FeedbackOptions.css'

class FeedbackOptions extends Component {
    render() {

        const {options, onLeaveFeedback} = this.props

        return(
            <div>
                {options.map((item) => {
                    return (
                        <button className="feedback-option" key={item} onClick={() => onLeaveFeedback(item)} type='button'>{item}</button>
                    )
                })}
            </div>
        )
    }
}

export default FeedbackOptions