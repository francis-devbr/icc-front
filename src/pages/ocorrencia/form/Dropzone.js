import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import FileUploadService from "app/api/ocorrencia/upload-files.service";
import { filesize } from "filesize";
import { useGetOcorrenciasDocumentosMutation } from "app/api/ocorrenciaInternaApiSlice";
function Dropzone({ accept, open }) {
  const [getOcorrenciasDocumentos] = useGetOcorrenciasDocumentosMutation();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const updateFile = useCallback((id, data) => {
    setUploadedFiles((state) =>
      state.map((file) => (file.id === id ? { ...file, ...data } : file))
    );
  }, []);

  const processUpload = useCallback(
    (uploadedFile) => {
      FileUploadService.upload(
        {
          name: uploadedFile.name,
          readable_size: uploadedFile.readableSize,
          tipo: "IMAGEM",
          id_ocorrencia: 4,
        },
        uploadedFile.file,
        {
          onUploadProgress: (progressEvent) => {
            let progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            console.log(
              `A imagem ${uploadedFile.name} está ${progress}% carregada... `
            );

            updateFile(uploadedFile.id, { progress });
          },
        }
      )
        .then((response) => {
          console.log(
            `A imagem ${uploadedFile.name} já foi enviada para o servidor!`
          );

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
    (files) => {
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
      newUploadedFiles.forEach(processUpload);
    },
    [processUpload]
  );
  const onDrop = useCallback(
    (files) => {
      handleUpload(files);
    },
    [handleUpload]
  );

  useEffect(() => {
    const get = async () => {
      await getOcorrenciasDocumentos(4).then((response) => {
        const postFormatted = response.data.map((post) => {
          return {
            ...post,
            id: post.id,
            preview: post.url,
            readableSize: post.readable_size,
            file: null,
            error: false,
            uploaded: true,
          };
        });

        console.log(postFormatted);
        setUploadedFiles(postFormatted);
      });
    };

    get();
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept,
      onDrop,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return (
        <div className="text-center">
          <p className="dropzone-content">Arraste imagens aqui...</p>
        </div>
      );
    }

    if (isDragReject) {
      return (
        <div className="text-center">
          <p className="dropzone-content">Tipo de arquivo não suportado</p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <p className="dropzone-content">Solte as imagens aqui</p>
      </div>
    );
  }, [isDragActive, isDragReject]);

  const deleteFile = useCallback((id) => {
    // api.delete(`posts/${id}`);
    setUploadedFiles((state) => state.filter((file) => file.id !== id));
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
                  <img
                    alt="..."
                    className=" avatar-img rounded"
                    data-dz-thumbnail
                    src={uploadedFile.preview}
                  />
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
