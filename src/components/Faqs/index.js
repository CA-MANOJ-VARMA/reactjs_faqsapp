// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  displayFunction = () => {
    const {faqsList} = this.props

    return (
      <ul className="css-ul-container">
        {faqsList.map(eachItem => (
          <li key={eachItem.id}>
            <FaqItem faqItem={eachItem} />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="css-bg-container">
        <h1>FAQs</h1>
        {this.displayFunction()}
      </div>
    )
  }
}

export default Faqs
