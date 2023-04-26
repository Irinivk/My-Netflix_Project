const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Video, VideoGenre, Genre } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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
        include: Genre
    })

    console.log(allvideos)

    res.status(200).json({ Videos: allvideos})
})

// get all movies
router.get('/movies', requireAuth, async (req, res) => {

    const allvideos = await Video.findAll({
        where: {
            type: 'Movie'
        },
        include: Genre
    })

    res.status(200).json({ Videos: allvideos })
})

// get all tv-shows
router.get('/tv-shows', requireAuth, async (req, res) => {

    const allvideos = await Video.findAll({
        where: {
            type: 'TV-Show'
        },
        include: Genre
    })

    res.status(200).json({ Videos: allvideos })
})

// create a video
router.post('/create',validVideos, requireAuth, async (req, res) => {

    const { name, type, cast, url, preview, description, genre } = req.body

    // const newVideo = Video.build({
    //     userId: req.user.id,
    //     name,
    //     type,
    //     cast,
    //     url,
    //     preview,
    //     description
    // })

    // await newVideo.save()

    const newVideo = Video.create({
        userId: req.user.id,
        name,
        type,
        cast,
        url,
        preview,
        description
    })

    // await newVideo.save()

    res.status(200).json(newVideo)
})

// create a genre for the video
router.post('/genre/:videoId', validGenre, requireAuth, async (req, res) => {

    const { name } = req.body

    const thegenre = await Genre.findOne({
        where: {
            name: name
        }
    })

    console.log(thegenre)

    if (!thegenre) {
        return res.status(404).json({
            "message": "Genre couldn't be found"
        });
    }

    const newgenreforvideo = await VideoGenre.build({
        videoId: req.params.videoId,
        genreId: thegenre.id
    })

    await newgenreforvideo.save()

    res.status(200).json(newgenreforvideo)
})


module.exports = router;