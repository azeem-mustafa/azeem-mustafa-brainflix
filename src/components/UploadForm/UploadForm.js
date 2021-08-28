import './_uploadForm.scss';

function UploadForm (){
    return(
        <form className= 'form'>

            

            <label className= 'form__title'>
               <h5 className='form__label'>TITLE YOUR VIDEO</h5>
            </label>
            <div className='form__flex-block'>
            <input
            className='form__title-box'
             name='user_title' 
             placeholder= 'Add a title to your video'></input>

             </div>

          

             
            <label className='form__description'></label>
                <h5 className='form__label'>ADD A VIDEO DESCRIPTION</h5>
                <div className='form__flex-block'>
                <textarea
                className='form__description-box'
                name='user_description' 
                placeholder= 'Add a description of your video'>
                </textarea>
                </div>
            

           
                <hr className="form__divider divider" />
            <div className='form__button-flex'>
            <button className='form__button-publish' type='submit'>PUBLISH</button>
            <button className='form__button-cancel' type='submit'>CANCEL</button>
            </div>
        </form>
    )
}

export default UploadForm;