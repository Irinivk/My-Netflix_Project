const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Video, Episode} = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { route } = require('./accounts');
const { Op } = require('sequelize');

const router = express.Router();

const validVideos = [
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Name for your film is required'),
    check('type')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Film type is required'),
    check('cast')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Cast is required'),
    check('url')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Url link is required'),
    check('preview')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Preview image of your film is required'),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Description of your film is required'),
    handleValidationErrors
]

const validGenre = [
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Name for your film is required'),
    handleValidationErrors
]

// get all videos
router.get('/', requireAuth, async (req, res) => {

    const allvideos = await Video.findAll({
    })

    res.status(200).json({ Videos: allvideos})
})

// get all movies
router.get('/movies', requireAuth, async (req, res) => {

    const allvideos = await Video.findAll({
        where: {
            type: 'Movie'
        },
    })

    res.status(200).json({ Videos: allvideos })
})

// get all tv-shows
router.get('/tv-shows', requireAuth, async (req, res) => {

    const allvideos = await Video.findAll({
        where: {
            type: 'TV-Show'
        },
    })

    res.status(200).json({ Videos: allvideos })
})

// create a video
router.post('/create', validVideos, requireAuth, async (req, res) => {

    const { name, type, cast, url, preview, description, genre } = req.body

    const newVideo = await Video.build({
        userId: req.user.id,
        name,
        type,
        cast,
        url,
        preview,
        description,
        genre
    })

    await newVideo.save()

    res.status(200).json(newVideo)
})

// delete a video

router.delete('/:videoId', requireAuth, async (req, res) => {

    const thevideo = await Video.findByPk(req.params.videoId)

    if (!thevideo) {
        return res.status(404).json({
            "message": "Video couldn't be found"
        });
    }

    if (thevideo.userId !== req.user.id) {
        return res.status(404).json({
            "message": "Invalid"
        });
    }

    await thevideo.destroy()

    res.status(200).json({
        "message": "Successfully deleted"
    })

})

// search by video name
router.get('/:videoName', requireAuth, async (req, res) => {
    const allvideo = await Video.findAll({
        where: {
            name: req.params.videoName
        }
    })

    if (allvideo.length === 0) {
        return res.status(404).json({
            "message": "Video couldn't be found"
        });
    }

    res.status(200).json({ Video: allvideo })
})

// get details of a video
router.get('/details/:videoId', requireAuth, async (req, res) => {


    const thevideo = await Video.findOne({
        where: {
            id: req.params.videoId
        },
        include: Episode
    })

    if (!thevideo) {
        return res.status(404).json({
            "message": "Video couldn't be found"
        });
    }

    res.status(200).json(thevideo)
    
})

// all users videos
router.get('/film/current/user', requireAuth, async (req, res) => {

    console.log(req.user.id)
    const userVideos = await Video.findAll({
        where: {
            userId: req.user.id
        },
    })


    res.status(200).json({Videos: userVideos})
})

// create episode for video
router.post('/episode/create/:videoId', requireAuth, async (req, res) => {

    const {title, number, season, url, preview, description} = req.body

    const vid = await Video.findByPk(req.params.videoId)

    if (!vid) {
        return res.status(404).json({
            "message": "Video couldn't be found"
        });
    }

    const newep = await Episode.build({
        userId: req.user.id,
        videoId: req.params.videoId,
        title,
        number,
        season,
        url,
        preview,
        description
    })  

    if (vid.userId !== req.user.id) {
        return res.status(404).json({
            "message": "Invalid"
        });
    }

    await newep.save()

    res.status(200).json(newep)

})

// get details of an episode
router.get('/episode/details/:episodeId', requireAuth, async (req, res) => {
   
    const theepi= await Episode.findOne({
        where: {
            id: req.params.episodeId
        }
    })

    if (!theepi) {
        return res.status(404).json({
            "message": "Video couldn't be found"
        });
    }

    res.status(200).json(theepi)

})


module.exports = router;