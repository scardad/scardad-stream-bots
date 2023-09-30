import variables from '../variables.js'

const getCrystalBallFortune = () => {
  try {
    const fortune = variables.crystallBallFortunes[Math.floor(Math.random() * variables.crystallBallFortunes.length)]
    const response = `The Crystal Ball says... ${fortune}`
    return response
  } catch {
    return "it's not available to help you right now"
  }
}

export default getCrystalBallFortune
