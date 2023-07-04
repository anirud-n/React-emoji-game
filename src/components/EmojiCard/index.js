// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachObj, makeItTrueAndShuffleAndUpdateScore, displayLostCard} = props
  const {id, emojiName, emojiUrl, isClicked} = eachObj
  const onClickingEmoji = () => {
    if (isClicked === false) {
      makeItTrueAndShuffleAndUpdateScore(id)
    } else {
      console.log('executed')
      displayLostCard()
    }
  }

  return (
    <li className="each-emoji-list" onClick={onClickingEmoji}>
      <button className="emoji-button" type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
