// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  faqItemFunction = () => {
    const {faqItem, openedFunction} = this.props
    const openedFunctionItem = id => {
      openedFunction(id)
    }
    console.log(faqItem)
    return (
      <div className="css-faqItem-container">
        <div className="css-question-container">
          <h1>{faqItem.questionText}</h1>
          <button
            type="button"
            className="css-button-itself"
            onClick={() => openedFunctionItem(faqItem.id)}
          >
            <img
              src={
                !faqItem.opened
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
              }
              alt={!faqItem.opened ? 'plus' : 'minus'}
            />
          </button>
        </div>
        {faqItem.opened && (
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
