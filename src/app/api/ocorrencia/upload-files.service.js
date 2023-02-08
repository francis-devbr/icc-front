import http from "../../../http-common";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/ocorrencias/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/ocorrencias/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
