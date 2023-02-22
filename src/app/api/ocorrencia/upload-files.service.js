import http from "http-common";

const upload = (data, file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  formData.append(
    "documento",
    new Blob([JSON.stringify(data)], {
      type: "application/json",
    })
  );

  return http.post(`/ocorrencias/files/upload`, formData, {
    headers: {
      "Content-Type": undefined,
    },

    onUploadProgress,
  });
};

const getFiles = (id) => {
  return http.get(`/ocorrencias/files/${id}`);
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
