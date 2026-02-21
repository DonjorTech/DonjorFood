const { router } = require('../../app');
router.post('/', (req, res) => {
    res.json({ message: 'Login exitoso' });
});
module.exports = router;