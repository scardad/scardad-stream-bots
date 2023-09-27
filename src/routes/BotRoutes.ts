const {
    getCrystalBallFortune
} = require("../controllers/BotController");
 
const router = express.Router();
 
router.route("/crystalBall").get(getCrystalBallFortune);
 
module.exports = router;