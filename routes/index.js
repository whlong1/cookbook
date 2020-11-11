const { Router } = require('express');
const router = Router();

router.get('/', (request, response) => response.send('Root Test'))

module.exports = router;