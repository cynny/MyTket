const express = require('express')
const events = require('./data/events')

const app = express()

app.get('/api/events', (req, res) => {
    res.json(events)
})

app.get('/api/events/:id', (req, res) => {
  const event = events.find((e)  => e._id === req.params.id);
  res.json(event);
})

app.listen(4000, console.log('Server is running on port 4000'));