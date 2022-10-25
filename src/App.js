import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from './Components/PasswordItem'
import './App.css'

class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    showPasswords: false,
    searchkeys: '',
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const backgroundIndex = Math.ceil(Math.random() * 6)
    const newPassword = {
      id: v4(),
      website,
      username,
      password,
      backgroundIndex,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  changeSearchKeys = event => {
    this.setState({searchkeys: event.target.value})
  }

  changeShowPassword = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordsList: filteredList})
  }

  render() {
    const {
      passwordsList,
      showPasswords,
      website,
      username,
      password,
      searchkeys,
    } = this.state
    const searchFilteredPasswords = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchkeys.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="passwordManager-app">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
            className="app-logo"
          />
          <div className="passWord-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="sm-password-manager"
            />
            <div className="input-container">
              <h1 className="input-heading">Add New Password</h1>
              <form className="form-container" onSubmit={this.addPassword}>
                <div className="input-box-container">
                  <div className="img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input-image"
                    />
                  </div>
                  <input
                    type="text"
                    className="input-element"
                    value={website}
                    placeholder="Enter Website"
                    onChange={this.changeWebsite}
                  />
                </div>
                <div className="input-box-container">
                  <div className="img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="input-image"
                    />
                  </div>
                  <input
                    type="text"
                    className="input-element"
                    value={username}
                    placeholder="Enter Username"
                    onChange={this.changeUsername}
                  />
                </div>
                <div className="input-box-container">
                  <div className="img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="input-image"
                    />
                  </div>
                  <input
                    type="password"
                    className="input-element"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.changePassword}
                  />
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="lg-password-manager"
            />
          </div>
          <div className="passWord-showing-container">
            <div className="password-count-and-search">
              <div className="password-count-heading">
                <h1 className="passwords-count">Your Passwords</h1>
                <p className="count">{searchFilteredPasswords.length}</p>
              </div>
              <div className="search-container">
                <div className="search-icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="search-icon"
                  />
                </div>
                <input
                  type="search"
                  className="search-bar"
                  placeholder="Search"
                  onChange={this.changeSearchKeys}
                />
              </div>
            </div>
            <div className="show-password-container">
              <input
                id="checkbox"
                type="checkbox"
                className="checkbox-input"
                onChange={this.changeShowPassword}
              />
              <label htmlFor="checkbox" className="label-input">
                Show Passwords
              </label>
            </div>
            {searchFilteredPasswords.length === 0 ? (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-image"
                />
                <p className="no-passwords-text">No Passwords</p>
              </div>
            ) : (
              <ul className="all-password-container">
                {searchFilteredPasswords.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    details={eachPassword}
                    deletePassword={this.deletePassword}
                    showPasswords={showPasswords}
                    backgroundIndex={eachPassword.backgroundIndex}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default App