const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

router.get('/', postController.index)

router.get('/:id', postController.show)

router.post('/', postController.store)

router.put('/:id', postController.upgrade)

router.patch('/:id', postController.modify)

router.delete('/:id', postController.destroy)

module.exports = router;