require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors({
    origin: "http://127.0.0.1:5173"
}))


const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, {priceInCents: 10000, name: "Item 1"}],
    [2, {priceInCents: 12000, name: "Item 2"}],
    [3, {priceInCents: 13000, name: "Item 3"}],
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'], 
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'aud',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.SERVER_URL}/success`,
            cancel_url: `${process.env.SERVER_URL}`,
        })

        res.json({ url: session.url})
    } catch (e) {
        res.status(500).json({ error: e.message })   
    }
})


app.listen(3000)