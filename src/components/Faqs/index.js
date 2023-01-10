import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="mainContainer">
      <div className="card">
        <h1 className="heading">FAQs</h1>
        <ul className="faqsContainer">
          {faqsList.map(each => (
            <FaqItem item={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
