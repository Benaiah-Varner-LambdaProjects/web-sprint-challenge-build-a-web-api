// Write your "projects" router here!
const express = require('express')
const projects = require('./projects-model')
const router = express.Router();

router.get('/', (req, res) => {
    projects.get()
    .then((action) => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})

router.get('/:id', (req, res) => {
    projects.get(req.params.id)
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
    projects.insert(req.body)
    .then((action) => {
        console.log(action)
        res.status(210).json(action)
    })
    .catch(err => {
        res.status(400).json({ message: 'error' })
        console.log(err)
    })
})

router.put('/:id', (req, res) => {
    projects.update(req.params.id, req.body)
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
    projects.remove(req.params.id)
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

router.get('/:id/actions', (req, res) => {
    projects.get(req.params.id)
    .then((action) => {
        res.status(200).json(action.actions)
    })
    .catch(err => {
        res.status(500).json({ message: 'error' })
        console.log(err)
    })
})


module.exports = router