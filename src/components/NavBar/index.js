// Write your code here.
import './index.css'

const NavBar = props => {
  const {cardDisplayed, score, topScore} = props

  if (cardDisplayed === 'gameCard') {
    return (
      <nav className="nav-bar">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-text">Emoji Game</h1>
        </div>
        <div className="score-cont">
          <div className="text-cont">
            <p className="score">Score: {score}</p>
          </div>
          <div className="text-cont">
            <p className="score">Top Score: {topScore}</p>
          </div>
        </div>
      </nav>
    )
  }
  return (
    <nav className="nav-bar">
      <div className="logo-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
        />
        <p className="logo-text">Emoji Game</p>
      </div>
    </nav>
  )
}

export default NavBar
