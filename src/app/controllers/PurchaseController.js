const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../services/Mail')

class PurchaseController {
    async store(req, res) {
        const {
            ad,
            content
        } = req.body

        const purchaseAd = await Ad.findById(ad).populate('author')
        const user = await User.findById(req.userId)

        await Mail.sendMail({
            from: '"Gustavo" <gustavo.bonassa1@gmail.com>',
            to: purchaseAd.author.email,
            subject: `Solicitação de compra: ${purchaseAd.title}`,
            html: `teste ${content}`
        })

        return res.send()
    }
}

module.exports = new PurchaseController()
