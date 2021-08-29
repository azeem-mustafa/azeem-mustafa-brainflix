import './_uploadForm.scss';
import React, {Component} from 'react';
import Home from '../Home/Home';
import {Redirect} from 'react-router-dom';


class UploadForm extends Component{

    state = {
        user_title: '',
        user_description: '',
     
    };

    handleChange = (event) =>{
        let isValid = this.isFormValid();
        console.log(isValid);
        this.setState({
            [event.target.name]: event.target.value,
          
            
        });
    };

    handleSubmit = (event) =>{
       event.preventDefault();

       if (this.isFormValid()){
           alert("Upload success")
           window.location.href = '/'
           
       } else {
           alert("Failed to upload")
       }
    
    }

    isFormValid = () =>{
        if(
            !this.state.user_title ||
            !this.state.user_description

        ){
        return false
        }
        return true
    };

   
  render(){
 
  
    return(
        <form onSubmit={this.handleSubmit} className= 'form'>

            

            <label className= 'form__title'>
               <h5 className='form__label'>TITLE YOUR VIDEO</h5>
            </label>
            <div className='form__flex-block'>
            <input
            className='form__title-box'
            value= {this.state.user_title}
            onChange={this.handleChange}
             name='user_title' 
             placeholder= 'Add a title to your video'></input>

             </div>

          

             
            <label className='form__description'></label>
                <h5 className='form__label'>ADD A VIDEO DESCRIPTION</h5>
                <div className='form__flex-block'>
                <textarea
                className='form__description-box'
                value={this.state.user_description}
                name='user_description' 
                onChange={this.handleChange}
                placeholder= 'Add a description of your video'>
                </textarea>
                </div>
            

           
                <hr className="form__divider divider" />
            <div className='form__button-flex'>
            
            <button
            
            className='form__button-publish' type='submit'>PUBLISH</button>
         
            
            <button className='form__button-cancel' type='submit'>CANCEL</button>
            
            </div>
        </form>
    )
  }
}

export default UploadForm;