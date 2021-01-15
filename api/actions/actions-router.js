// Write your "actions" router here!
const express = require('express')
const actions = require('./actions-model')
const router = express.Router();

router.get('/', (req, res) => {
    actions.get()
    .then((action) => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})

router.get('/:id', (req, res) => {
    actions.get(req.params.id)
    .then((id) => {
        if (id) {
            res.status(200).json(id)
        } else {
            res.status(404).json({ message: `action with ${id} not found` })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})

router.post('/', (req, res) => {
    console.log('body', req.body)
    actions.insert(req.body)
    .then((action) => {
        console.log(action)
        res.status(210).json(action)
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
    actions.update(req.params.id, req.body)
    .then((action) => {
        if (action) {
            res.status(200).json(action)
        } else {
            res.status(404).json({ message: "Error"})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    actions.remove(req.params.id)
    .then((id) => {
        if (id) {
            res.status(200).json(id)
        } else {
            res.status(404).json({ message: `action with ${id} not found` })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})

module.exports = router