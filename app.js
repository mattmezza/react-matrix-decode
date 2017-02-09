import React from 'react'
import ReactDOM from 'react-dom'
import MatrixDecode from '../src/decode'

class Container extends React.Component {
  render () {
    return (
      <div>
        <div>
          <MatrixDecode ref='decode' before='Reveal me' after='Trump 💩' speed={50} />
        </div>
        <div>
          <button onClick={() => this.refs.decode.decode()}>Matrix Decode!</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('container'))
