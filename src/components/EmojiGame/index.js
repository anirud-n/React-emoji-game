/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    isClicked: false,
  },

  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    isClicked: false,
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    isClicked: false,
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    isClicked: false,
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    isClicked: false,
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    isClicked: false,
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    isClicked: false,
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    isClicked: false,
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    isClicked: false,
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    isClicked: false,
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    isClicked: false,
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    isClicked: false,
  },
]

class EmojiGame extends Component {
  state = {
    cardDisplayed: 'gameCard',
    updatedEmojisList: emojisList,
    score: 0,
    topScore: 0,
  }

  makeItTrueAndShuffleAndUpdateScore = id => {
    const {updatedEmojisList, score} = this.state
    const newEmojiList = updatedEmojisList.map(eachObj => {
      if (eachObj.id === id) {
        return {...eachObj, isClicked: true}
      }
      return eachObj
    })
    const shuffledEmojiList = newEmojiList.sort(() => Math.random() - 0.5)
    const newScore = score + 1
    let displayType
    if (newScore === 12) {
      displayType = 'won'
    } else {
      displayType = 'gameCard'
    }

    this.setState(prev => ({
      updatedEmojisList: shuffledEmojiList,
      score: prev.score + 1,
      cardDisplayed: displayType,
    }))
  }

  displayLostCard = () => {
    const {score, topScore} = this.state
    let currentTopScore
    if (score > topScore) {
      currentTopScore = score
    } else {
      currentTopScore = topScore
    }
    this.setState({
      cardDisplayed: 'lost',
      topScore: currentTopScore,
    })
  }

  restartGame = () => {
    const {score, topScore} = this.state
    let currentTopScore
    if (score > topScore) {
      currentTopScore = score
    } else {
      currentTopScore = topScore
    }
    this.setState({
      cardDisplayed: 'gameCard',
      updatedEmojisList: emojisList,
      score: 0,
      topScore: currentTopScore,
    })
  }

  render() {
    const {cardDisplayed, updatedEmojisList, score, topScore} = this.state
    let card
    if (cardDisplayed === 'gameCard') {
      card = (
        <ul className="main-game-cont">
          {updatedEmojisList.map(eachObj => (
            <EmojiCard
              eachObj={eachObj}
              key={eachObj.id}
              makeItTrueAndShuffleAndUpdateScore={
                this.makeItTrueAndShuffleAndUpdateScore
              }
              displayLostCard={this.displayLostCard}
            />
          ))}
        </ul>
      )
    } else if (cardDisplayed === 'won') {
      card = (
        <li className="won-cont">
          <div className="message-cont">
            <h1 className="you-won-text">You Won</h1>
            <p className="best-score-text">Best Score</p>
            <p className="win-score">12/12</p>
            <button
              className="play-btn"
              type="button"
              onClick={this.restartGame}
            >
              Play Again
            </button>
          </div>
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              className="emoji-height"
              alt="win or lose"
            />
          </div>
        </li>
      )
    } else {
      card = (
        <li className="won-cont">
          <div className="message-cont">
            <h1 className="you-won-text">You Lose</h1>
            <p className="best-score-text">Score</p>
            <p className="win-score">{score}/12</p>
            <button
              className="play-btn"
              type="button"
              onClick={this.restartGame}
            >
              Play Again
            </button>
          </div>
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              className="emoji-height"
              alt="win or lose"
            />
          </div>
        </li>
      )
    }

    return (
      <div className="bg-cont">
        <NavBar
          cardDisplayed={cardDisplayed}
          score={score}
          topScore={topScore}
        />
        <ul className="main-game-cont">{card}</ul>
      </div>
    )
  }
}

export default EmojiGame
