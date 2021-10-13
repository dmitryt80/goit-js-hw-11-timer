export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._rootRef = document.querySelector(selector)
    this._daysRef = this._rootRef.querySelector('[data-value=days]')
    this._hoursRef = this._rootRef.querySelector('[data-value=hours]')
    this._minsRef = this._rootRef.querySelector('[data-value=mins]')
    this._secsRef = this._rootRef.querySelector('[data-value=secs]')
    this._time = targetDate
    this._intervalId = setInterval(this._changeDate, 1000)
  }

  _checkLengthText(num) {
    if (num < 10) return '0' + num
    return String(num)
  }

  _clearInterval() {
    clearInterval(this._intervalId)
  }

  _drawTimer(time) {
    this._daysRef.textContent = this._checkLengthText(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    )
    this._hoursRef.textContent = this._checkLengthText(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    )
    this._minsRef.textContent = this._checkLengthText(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    )
    this._secsRef.textContent = this._checkLengthText(
      Math.floor((time % (1000 * 60)) / 1000),
    )
  }

  _changeDate = () => {
    const now = new Date()
    const time = this._time - now

    if (time <= 0) {
      this._clearInterval()
      this._drawTimer(0)
    } else {
      this._drawTimer(time)
    }
  }
}