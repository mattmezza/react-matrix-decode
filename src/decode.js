import React from 'react'

export default class Decode extends React.Component {

  constructor (props) {
    super(props)
    this.decode = this.decode.bind(this)
    this.genLetters = this.genLetters.bind(this)
    this.runThis = this.runThis.bind(this)

    this.counter = 0
    this.cutOffAt = this.props.cutOff || 50
    this.obfuscated = 1
    let randomNumbers = new Array(this.props.after.length + 1)
    for (let i = 0; i < randomNumbers.length; i++) {
      randomNumbers[i] = Math.floor((Math.random() * 8) + 1)
    }
    randomNumbers = randomNumbers.join('')

    this.genNum = randomNumbers.split('')
    this.original = this.props.after.split('')
    this.state = {
      text: this.props.before
    }
  }

  decode () {
    this.interval = setInterval(this.runThis, (this.props.speed || 150))
  }

  render () {
    return (
      <span style={this.props.style || {}}>
        {this.props.disabled ? this.props.after : this.state.text}
      </span>
    )
  }

  genLetters () {
    let done = new Set()
    for (let i = 0; i < this.original.length; i++) {
      let r = Math.round(Math.random() * this.original.length)
      if (!done.has(r)) {
        if (this.genNum[r] !== this.original[r] && this.genNum[r] !== 0) {
          this.genNum[r] = Math.round(Math.random() * 5)
        } else {
          this.genNum[r] = this.original[r]
        }
        done.add(r)
      } else {
        i--
      }
    }
    if (this.genNum.toString() === this.original.toString()) {
      this.obfuscated = 0
      window.clearInterval(this.interval)
      if (this.props.onDecoded) {
        this.props.onDecoded()
      }
      return this.props.after
    }
    if (this.counter === this.cutOffAt) {
      this.obfuscated = 0
      window.clearInterval(this.interval)
      if (this.props.onDecoded) {
        this.props.onDecoded()
      }
      return this.props.after
    }
    this.counter += 1
    return this.genNum.join('')
  }

  runThis () {
    let text = this.genLetters()
    this.setState({text})
  }
}
