import './index.css'

const backgroundColors = [
  'red',
  'violet',
  'blue',
  'yellow',
  'green',
  'dark-green',
  'orange',
]

const PasswordItem = props => {
  const {details, deletePassword, showPasswords, backgroundIndex} = props
  const {id, website, username, password} = details
  const firstLetter = website[0].toUpperCase()
  const backgroundClassName = backgroundColors[backgroundIndex]

  const onClickDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="password-container">
      <div className={`first-letter-container ${backgroundClassName}`}>
        <p className="first-letter">{firstLetter}</p>
      </div>
      <div className="details-container">
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {showPasswords ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button
        testid="delete"
        type="button"
        className="delete-button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem