import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import FileUploadService from "app/api/ocorrencia/upload-files.service";
import { filesize } from "filesize";
import { useDeleteOcorrenciaDocumentoMutation } from "app/api/ocorrencia/ocorrenciaApiSlice";
import { useGetDownloadOcorrenciasDocumentosMutation } from "app/api/ocorrencia/ocorrenciaApiSlice";

function Dropzone({ accept, open, tipo, data, protocolo }) {
  const [getDownloadOcorrenciasDocumentos] =
    useGetDownloadOcorrenciasDocumentosMutation();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  console.log(data);
  const updateFile = useCallback((id, data) => {
    setUploadedFiles((state) =>
      state.map((file) => (file.id === id ? { ...file, ...data } : file))
    );
  }, []);

  const [deleteOcorrenciaDocumento] = useDeleteOcorrenciaDocumentoMutation();

  const processUpload = useCallback(
    (uploadedFile, protocolo, tipo) => {
      FileUploadService.upload(
        {
          name: uploadedFile.name,
          readable_size: uploadedFile.readableSize,
          tipo: tipo,
          id_ocorrencia: protocolo,
        },
        uploadedFile.file,
        {
          onUploadProgress: (progressEvent) => {
            let progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            updateFile(uploadedFile.id, { progress });
          },
        }
      )
        .then((response) => {
          updateFile(uploadedFile.id, {
            uploaded: true,
            id: response.data.id,
            url: response.data.url,
          });
        })
        .catch((err) => {
          console.error(
            `Houve um problema para fazer upload da imagem ${uploadedFile.name} no servidor`
          );
          console.log(err);

          updateFile(uploadedFile.id, {
            error: true,
          });
        });
    },
    [updateFile]
  );
  const handleUpload = useCallback(
    (files, protocolo, tipo) => {
      const newUploadedFiles = files.map((file) => ({
        file,
        id: uuidv4(),
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: "",
      }));

      setUploadedFiles((state) => state.concat(newUploadedFiles));
      newUploadedFiles.forEach((u) => processUpload(u, protocolo, tipo));
    },
    [processUpload]
  );
  const onDrop = (files) => {
    handleUpload(files, protocolo, tipo);
  };

  useEffect(() => {
    setUploadedFiles(data);
  }, [data]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept,
      onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return (
        <div className="text-center">
          <p className="dropzone-content">{`Arraste ${tipo?.toLowerCase()} aqui ou click...`}</p>
        </div>
      );
    }

    if (isDragReject) {
      return (
        <div className="text-center">
          <p className="dropzone-content">`Tipo de arquivo não suportado`</p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <p className="dropzone-content">{`Solte ${tipo?.toLowerCase()}s aqui...`}</p>
      </div>
    );
  }, [isDragActive, isDragReject]);

  const deleteFile = useCallback((id) => {
    deleteOcorrenciaDocumento(id).then(
      setUploadedFiles((state) => state.filter((file) => file.id !== id))
    );
  }, []);

  const downloadFile = useCallback((uploadedFile) => {
    FileUploadService.getFile({
      id: Number(uploadedFile.id),
      filename: uploadedFile.name,
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response?.data]));
      console.log(url);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        uploadedFile.name // File name with type
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  }, []);

  useEffect(() => {
    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  });
  return (
    <div className="dropzone dropzone-multiple">
      <div {...getRootProps({ className: "dropzone " })}>
        <input className="input-zone" {...getInputProps()} />
        {renderDragMessage()}
      </div>

      <ListGroup
        className=" dz-preview dz-preview-multiple list-group-lg"
        flush
      >
        {uploadedFiles.map((uploadedFile) => (
          <ListGroupItem key={uploadedFile.id} className=" px-0">
            <Row className=" align-items-center">
              <Col className=" col-auto">
                <div className=" avatar">
                  {tipo === "IMAGEM" && (
                    <img
                      alt="..."
                      className=" avatar-img rounded"
                      data-dz-thumbnail
                      src={uploadedFile.preview}
                    />
                  )}

                  {tipo === "VIDEO" && <i class="fa-solid fa-download"></i>}
                </div>
              </Col>
              <div className=" col ml--3">
                <h4 className=" mb-1" data-dz-name>
                  {uploadedFile.name}
                </h4>
                <p className=" small text-muted mb-0" data-dz-size>
                  {uploadedFile.readableSize}
                </p>
              </div>
              <Col className=" col-auto">
                {!!uploadedFile.url && (
                  <>
                    <Button
                      size="sm"
                      color="success"
                      data-dz-remove
                      onClick={(e) => downloadFile(uploadedFile)}
                    >
                      <i class="fa-solid fa-download"></i>
                    </Button>
                  </>
                )}
              </Col>
              <Col className=" col-auto">
                {!!uploadedFile.url && (
                  <>
                    <Button
                      size="sm"
                      color="danger"
                      data-dz-remove
                      onClick={(e) => deleteFile(uploadedFile.id)}
                    >
                      <i className="fas fa-trash" />
                    </Button>
                  </>
                )}
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
export default Dropzone;
