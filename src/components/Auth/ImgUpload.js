import "../minor/Input.css";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "public_FW25b53ADMLkgyn2s6U2fbcYwvHo" });
const uploaderOptions = {
  multi: false,
  styles: {
    colors: {
      primary: "#7f56d9",
    },
  },
};

const MyUploadButton = ({ setFiles }) => (
  <UploadButton
    uploader={uploader}
    options={uploaderOptions}
    onComplete={setFiles}>
    {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
  </UploadButton>
);

const ImgUpload = (props) => {
  const [files, setFiles] = useState([]);
  const MyUploadedFiles = (files) =>
    files.map((file) => {
      // Tip: save 'filePath' to your DB (not 'fileUrl').
      const filePath = file.filePath;
      const fileUrl = uploader.url(filePath, "thumbnail");
      props.setBanner(fileUrl);
    });
  return (
    <>
      {files.length ? (
        <>
          {MyUploadedFiles(files)}
          <input type="text" value="Banner Uploaded" disabled></input>
        </>
      ) : (
        <MyUploadButton setFiles={setFiles} />
      )}
    </>
  );
};

export default ImgUpload;
