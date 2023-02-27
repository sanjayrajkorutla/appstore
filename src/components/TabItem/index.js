// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabDetails
  const tabClassName = isActive ? 'tab-button active' : 'tab-button'
  const onClickTab = () => {
    setActiveTabId(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
