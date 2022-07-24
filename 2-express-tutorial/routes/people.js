const express = require('express')
const router = express.Router()
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// // cach 1 to set up the route
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

// cach 2 to set up the route
router.route('/').get(getPeople).post(createPerson)
router.route('/postmen').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router