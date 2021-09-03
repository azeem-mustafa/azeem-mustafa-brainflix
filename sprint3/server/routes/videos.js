const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid'); 

const videosFilePath = './Data/video-details.json';

// Re-usable function to read our data file
const readVideos = () => {
  const videoContent = fs.readFileSync('./Data/video-details.json');
  const parsedVideoContent = JSON.parse(videoContent);
  return parsedVideoContent;
}

// GET all notes endpoint
router.get('/', (_req, res) => {
  try {
    const videos = readVideos();
    return res.status(200).json(readVideos());
  } catch(err) {
    return res.status(500).json({ error: "File cannot be read." }) 
  }
});


// for this endpoint to match, it needs to be '/notes/latest'
router.get('/:id', (req, res) => {
  const videos = readVideos();
  const grabVideo = videos.find((video) => video.id === req.params.id)

  if (!grabVideo){
    return res.status(500).send({error: "Cannot find video"})
  }
  res.json(grabVideo);
  // res.send('Here are your latest videos');
});

// POST a new note endpoint
router.post('/', (req, res) => {
  // console.log('Request body object: ', req.body);

  // Create a new note object with unique ID
  
  const newVideo = {
    id: "1af0jruup5gu",
    title: req.body.title,
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    channel: "New Channel",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
  }
  console.log(newVideo);

  // Read current notes
  const videos = readVideos();

  // Push my latest note into my notes
  videos.push(newVideo);

  // Write my updated notes into file
  fs.writeFileSync(videosFilePath, JSON.stringify(videos));


  res.json(newVideo);
});

// Finally, export the router for use in index.js
module.exports = router;