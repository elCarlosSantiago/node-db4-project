const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.json('/api wired');
});

router.use((err, req, res, next) => {//eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
