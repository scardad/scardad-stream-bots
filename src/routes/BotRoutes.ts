import express from 'express';
import getCrystalBallFortune from '../controllers/BotController.js';

const router = express.Router();

router.route('/crystalBall').get((req, res) => {
  res.send(getCrystalBallFortune());
});

router;

export default router;
