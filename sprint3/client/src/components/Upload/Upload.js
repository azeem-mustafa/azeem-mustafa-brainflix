import UploadHero from "../UploadHero/UploadHero";
import UploadForm from "../UploadForm/UploadForm";
import "./_uploadMain.scss";

function Upload({history}) {
  return (
    <main className="upload">
      <hr className="upload__divider" />
      <h1 className="upload__title">Upload Video</h1>

      <div className="upload__flexbox">
        <UploadHero />
        <UploadForm history={history} />
      </div>
    </main>
  );
}

export default Upload;
