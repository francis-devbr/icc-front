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

const getFiles = ({id,filename}) => {
  return http.get`/ocorrencias/files/v1/download/${id}/${filename}`;
};

const getFile = ({ id, filename }) => (
  http.get(`/ocorrencias/files/v1/download/${id}/${filename}`, {
    params: {
      cacheBustTimestamp: Date.now(), // prevents IE cache problems on re-download
    },
    responseType: 'blob',
    headers: {
      Accept: 'application/octet-stream',
    },
  })
);

const FileUploadService = {
  upload,
  getFiles,
  getFile,
};

export default FileUploadService;
