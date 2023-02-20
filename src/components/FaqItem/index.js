// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isIconClicked: false}

  isIconClickedFunction = () => {
    const {isIconClicked} = this.state
    this.setState({isIconClicked: !isIconClicked})
  }

  faqItemFunction = () => {
    const {faqItem} = this.props
    const {isIconClicked} = this.state

    console.log(faqItem)
    return (
      <div className="css-faqItem-container">
        <div className="css-question-container">
          <h1>{faqItem.questionText}</h1>
          <button
            type="button"
            className="css-button-itself"
            onClick={this.isIconClickedFunction}
          >
            <img
              src={
                !isIconClicked
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              }
              alt={!isIconClicked ? 'plus' : 'minus'}
            />
          </button>
        </div>
        {isIconClicked && (
          <>
            <hr />
            <div className="css-answer-container">
              <p>{faqItem.answerText}</p>
            </div>
          </>
        )}
      </div>
    )
  }

  render() {
    return <>{this.faqItemFunction()}</>
  }
}

export default FaqItem
