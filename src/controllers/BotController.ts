const { crystallBallFortunes } = require('../variables');

exports.getCrystalBallFortune = () => {
    try {
        const fortune = crystallBallFortunes[Math.floor(Math.random() * crystallBallFortunes.length)];
        const response = `The Crystal Ball says... ${fortune}`;
        return response;
    } catch {
        return "it's not available to help you right now"
    }
};