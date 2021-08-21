import React from 'react';

function ListedComments(props) {
    return (
        
            <div className='listed-comments'>
                {props.video.comments.map(comment => {
                    return(
                    <div key= {comment.id} className='listed-comments__section'>

                    <div className='listed-comments__img-box'>
                        <img className='listed-comments__placeholder' alt= "user" />
                    </div>

                    <div className='listed-comments__comments'>
                        <p className='listed-comments__name'>{comment.name}</p>
                        <p className='listed-comments__date'>{comment.timestamp}</p>
                        <p className='listed-comments__text-area'>{comment.comment}</p>
                    </div>
                    <hr className='video-details__divider divider'/>
                </div>
               
                )
                
                })}
                
            </div>
        
    )
}

export default ListedComments;