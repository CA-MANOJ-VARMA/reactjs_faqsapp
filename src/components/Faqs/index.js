// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqsListState: []}

  componentDidMount() {
    const {faqsList} = this.props
    this.setState({faqsListState: faqsList})
  }

  openedFunction = openedId => {
    const {faqsListState} = this.state
    const clickedItem = faqsListState.findIndex(
      eachItem => eachItem.id === openedId,
    )

    faqsListState[clickedItem].opened = !faqsListState[clickedItem].opened
    this.setState({faqsListState})
  }

  displayFunction = () => {
    const {faqsListState} = this.state

    return (
      <ul className="css-ul-container">
        {faqsListState.map(eachItem => (
          <li key={eachItem.id}>
            <FaqItem faqItem={eachItem} openedFunction={this.openedFunction} />
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
