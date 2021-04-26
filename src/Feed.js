import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
                message='This is moussa hello.'
                timestamp="This is a timestamp"
                username='username'
                image="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/04/eso1644bsmall__w770.jpg"
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
