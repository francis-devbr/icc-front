import http from "http-common";

const upload = (id,file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post(`/ocorrencias/files/upload/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = (id) => {
  console.log("asssss")
  return http.get(`/ocorrencias/files/${id}`);
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
