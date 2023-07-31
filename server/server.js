require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: "http://127.0.0.1:5173"
}))


const stripe = require('stripe')(process.env.STRIPE_KEY)

const storeItems = new Map([
    [1, {priceInCents: 10000, name: "Item 1"}],
    [2, {priceInCents: 12000, name: "Item 2"}],
])

app.post('/create-checkout-session', (req, res) => {
    res.json({ url: "hi"})
})


app.listen(3000)