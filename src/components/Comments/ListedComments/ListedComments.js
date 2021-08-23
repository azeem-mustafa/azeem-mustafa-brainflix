import React from "react";
import "./_listedComments.scss";

function ListedComments(props) {

  /*format date*/
  function dateDisplay(timeAndDay) {
    const currentDate = new Date(timeAndDay);
    let month = currentDate.getMonth() + 1;
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    return +month + "/" + date + "/" + year;
  }

  return (
    <div className="listed-comments">

      {props.video.comments.map((comment) => {

        return (

          <div key={comment.id} className="listed-comments__section">

            <section className="listed-comments__full-flex-section">

              <div className="listed-comments__img-box">

                <img className="listed-comments__placeholder" /*alt= "user"*/ />

              </div>

              <section className="listed-comments__flex-wrap">

                <div className="listed-comments__comments">

                  <div className="listed-comments__name-and-date-block">

                    <p className="listed-comments__name">{comment.name}</p>
                    <p className="listed-comments__date">
                      {dateDisplay(comment.timestamp)}
                    </p>

                  </div>

                  <div className="listed-comments__text-area-block">
                    <p className="listed-comments__text-area">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </section>
            </section>

            <hr className="video-details__divider divider" />
            
          </div>
        );
      })}
    </div>
  );
}

export default ListedComments;
