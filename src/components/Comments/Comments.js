import React from 'react';
import './_comments.scss';
import Avatar from '../../assets/images/Mohan-muruge.jpg';

function Comments(props) {
    return (
        <section className="comments">

            <form className="comments__form">

                <div className="comments__form-flex">

                    <div className="comments__form-img-box">
                        <img className="comments__form-avatar" src={Avatar} alt="mohan-img" />
                    </div>

                    <div className="comments__comment-box">
                        <label className="comments__form-label body-copy">JOIN THE CONVERSATION</label>
                        <textarea className="comments__text-area body-copy" name="user_comment"
                            placeholder="Write comment here"></textarea>

                        <button className="comments__button" type="submit">COMMENT</button>

                    </div>
                </div>
            </form>
            <hr className='video-details__divider divider' />
        </section>
    )
}

export default Comments;