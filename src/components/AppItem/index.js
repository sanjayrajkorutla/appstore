// Write your code here
// eslint-disable-next-line import/newline-after-import
import './index.css'
const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="list-app">
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="appname">{appName}</p>
    </li>
  )
}

export default AppItem
