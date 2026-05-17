import { Component } from 'react'

class FeedbackOptions extends Component {
    render() {

        const {options, onLeaveFeedback} = this.props

        return(
            <div>
                {options.map((item) => {
                    return (
                        <button key={item} onClick={() => onLeaveFeedback(item)} type='button'>{item}</button>
                    )
                })}
            </div>
        )
    }
}

export default FeedbackOptions