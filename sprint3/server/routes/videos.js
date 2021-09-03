const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid'); 

const videosFilePath = './Data/video-details.json';

const readVideos = () => {
  const videoContent = fs.readFileSync('./Data/video-details.json');
  const parsedVideoContent = JSON.parse(videoContent);
  return parsedVideoContent;
}

router.get('/', (_req, res) => {
  try {
    const videos = readVideos();
    return res.status(200).json(readVideos());
  } catch(err) {
    return res.status(500).json({ error: "File cannot be read." }) 
  }
});

router.get('/:id', (req, res) => {
  const videos = readVideos();
  const grabVideo = videos.find((video) => video.id === req.params.id)

  if (!grabVideo){
    return res.status(500).send({error: "Cannot find video"})
  }
  res.json(grabVideo);

});


router.post('/', (req, res) => {
 
  
  const newVideo = {
    id: uniqid(),
    title: req.body.title,
    image: "http://localhost:8080/images/image2.jpeg",
    channel: "New Channel",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "4:01",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: 1545162149000,
    comments: []
  }
  console.log(newVideo);

  
  const videos = readVideos();


  videos.push(newVideo);

  fs.writeFileSync(videosFilePath, JSON.stringify(videos));


  res.json(newVideo);
});


module.exports = router;