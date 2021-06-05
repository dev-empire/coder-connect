import React from 'react'

const ChatPage = () => {
  //   const slicedText = str => {
  //     const sliced = str.split(' ')
  //     const gen = sliced.map(letter => letter[0])
  //     return gen
  //   }

  return (
    <div className="ui container">
      <div className="mt-2">
        <div className="ui very relaxed divided list">
          <div className="item">
            <div className="content">
              <a className="header tag">Daniel Louise</a>
              <div className="description">Arrested Development</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <a className="header">Stevie Feliciano</a>
              <div className="description">Bob's Burgers</div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <a className="header">Elliot Fu</a>
              <div className="description">The Godfather Part 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
