import UploadHero from "../UploadHero/UploadHero";
import UploadForm from "../UploadForm/UploadForm";
import './_uploadMain.scss';

function Upload (){
    return(
    <main>
        <hr className="upload__divider divider" />
        <UploadHero />
        <UploadForm />
        
    </main>
    )
}

export default Upload