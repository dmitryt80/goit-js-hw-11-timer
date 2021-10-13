import CountdownTimer from './CountdownTimer.js'

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
})