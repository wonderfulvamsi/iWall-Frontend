import React from 'react'
import filledHeart from '../assets/heart-filled.png'
import outlinedHeart from '../assets/hear-outlined.png'
import dots from '../assets/3dots icon.png'

function PostCard() {
    return (
        <div>PostCard
            <img src={filledHeart} />
            <img src={outlinedHeart} />
        </div>
    )
}

export default PostCard