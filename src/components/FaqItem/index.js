import './index.css'

import {Component} from 'react'

class FaqItem extends Component {
  state = {answer: false}

  toggle = () => {
    const {answer} = this.state

    this.setState({answer: !answer})
  }

  render() {
    const {answer} = this.state

    const {item} = this.props

    return (
      <li className="li">
        <div className="itemTop">
          <h1 className="itemheading">{item.questionText}</h1>
          <button className="button" type="button" onClick={this.toggle}>
            <img
              className="buttonimg"
              src={
                answer
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={answer ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {answer && <p className="itemans">{item.answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
