import './_upload-hero.scss';
import VideoThumbnail from '../../assets/images/Upload-video-preview.jpg';

function UploadHero () {
    return(
        <div className= 'hero'>
            <section className= 'hero-box'>
                <h1 className= 'hero__title'>Upload Video</h1>
                <div className= 'hero__flex-box'>
                    <h5 className= 'hero__subtitle'>VIDEO THUMBNAIL</h5>
                    <img alt='thumbnail'/>
                </div>
            </section>
            </div>

    )
    
}

export default UploadHero;
