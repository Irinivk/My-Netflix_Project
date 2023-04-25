const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Account } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validAccounts = [
    check('first_name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('First Name is required'),
    check('prevImage')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('preview image required'),
    handleValidationErrors
]


// get all accounts of User
router.get('/', requireAuth, async (req, res) => {
    const accounts = await Account.findAll({
        where: {
            userId: req.user.id
        }
    })

    
    res.status(200).json({
        Accounts: accounts
    })
})

// create a new account for user
router.post('/',validAccounts, requireAuth, async (req, res) => {

    const { first_name, prevImage } = req.body

    const newAccount = Account.build({
        userId: req.user.id,
        first_name,
        prevImage
    })

    await newAccount.save()

    res.status(200).json(newAccount)

})

// delete an account
router.delete('/:accountId', requireAuth, async (req, res) => {

    const account = await Account.findByPk(req.params.accountId)

    if (!account) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        });
    }

    if (account.userId !== req.user.id) {
        return res.status(404).json({
            "message": "Invalid"
        });
    }

    await account.destroy()

    res.status(200).json({
        "message": "Successfully deleted"
    })

})

// edit an account
router.put('/:accountId', validAccounts, requireAuth, async (req, res) => {

    const { first_name, prevImage } = req.body

    const account = await Account.findByPk(req.params.accountId)


    if (!account) {
        return res.status(404).json({
            "message": "Account couldn't be found"
        });
    }

    if (account.userId !== req.user.id) {
        return res.status(404).json({
            "message": "Invalid"
        });
    }

    account.first_name = first_name
    account.prevImage = prevImage

    await account.save()

    res.status(200).json(account)
})


module.exports = router;