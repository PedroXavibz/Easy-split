import { useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';

import { AiOutlineUpload, AiOutlineReload } from 'react-icons/ai';
import { MdFileDownloadDone, MdInfoOutline } from 'react-icons/md';
import { BsFillFileEarmarkPlayFill } from 'react-icons/bs';
import { TiTimes } from 'react-icons/ti';

import Text from '../text';
import Spinner from '../spinner';

import ContainerMain, {
  ContainerFiles,
  ListFiles,
  ItemFile,
  ContainerButtons,
  ErrorMessage,
} from './style';

const MainSection = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const inputHandler = ({ target }) => {
    const files = [...target.files].map(f => {
      const curFile = f;
      curFile.id = uuid();
      curFile.isUploading = false;
      curFile.isDownloading = false;
      curFile.alreadyDownloaded = false;
      curFile.isSuccess = true;
      curFile.isHover = false;
      curFile.errorMessage = '';

      return curFile;
    });
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const toggleFile = (fileId, toToggle) => {
    const files = selectedFiles.map(file => {
      if (file.id === fileId) {
        file[toToggle] = !file[toToggle];
      }
      return file;
    });

    setSelectedFiles(files);
  };

  const setIsHover = fileId => {
    const files = selectedFiles.map(file => {
      if (file.id === fileId) {
        file.isHover = true;
      }
      return file;
    });

    setSelectedFiles(files);
  };

  const setRemoveHover = fileId => {
    const files = selectedFiles.map(file => {
      if (file.id === fileId) {
        file.isHover = false;
      }
      return file;
    });

    setSelectedFiles(files);
  };

  const setErrorMessage = (fileId, message) => {
    const files = selectedFiles.map(file => {
      if (file.id === fileId) {
        file.errorMessage = message;
      }
      return file;
    });

    setSelectedFiles(files);
  };

  const makeRequest = file => {
    if (file.alreadyDownloaded) return;

    const data = new FormData();
    data.append('file', file);
    toggleFile(file.id, 'isUploading');

    axios
      .post('http://localhost:5000/api/v1/video/upload/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'arraybuffer',
      })
      .then(response => {
        toggleFile(file.id, 'isUploading');
        toggleFile(file.id, 'alreadyDownloaded');

        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', `${file.name.split('.')[0]}.zip`);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(async err => {
        toggleFile(file.id, 'isUploading');

        if (file.isSuccess) {
          toggleFile(file.id, 'isSuccess');
        }

        const error = await JSON.parse(new TextDecoder().decode(err.response.data));
        setErrorMessage(file.id, error.message);
      });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await Promise.all(selectedFiles.map(file => makeRequest(file)));
  };

  const removeFile = id => {
    const filteredFiles = selectedFiles.filter(f => f.id !== id);
    setSelectedFiles(filteredFiles);
  };

  const reUpload = id => {
    const file = selectedFiles.find(curFile => curFile.id === id);
    makeRequest(file);
  };

  const checkButton = file => {
    if (file.isUploading) {
      return (<Spinner isUploading={file.isUploading} />);
    }

    if (file.isDownloading) {
      return (<Spinner />);
    }

    if (!file.isSuccess) {
      return (
        <ContainerButtons>
          {file.isHover
            ? (
              <>
                <button type="button" title="Remove" onClick={() => removeFile(file.id)}>
                  <TiTimes size="17px" color="red" />
                </button>
                <button type="button" title="Reupload" onClick={() => reUpload(file.id)}>
                  <AiOutlineReload size="17px" color="#147b9e" />
                </button>
              </>
            )
            : (
              <>
                <ErrorMessage>{file.errorMessage}</ErrorMessage>
                <MdInfoOutline size="17px" color="red" />
              </>
            )}
        </ContainerButtons>
      );
    }

    if (file.alreadyDownloaded) {
      return (
        <ContainerButtons>
          {file.isHover
            ? (
              <button type="button" title="Remove" onClick={() => removeFile(file.id)}>
                <TiTimes size="17px" color="red" />
              </button>
            )
            : (
              <MdFileDownloadDone title="Done" size="17px" color="#29BB89" />
            )}
        </ContainerButtons>
      );
    }

    return (
      <button type="button" title="Remove" onClick={() => removeFile(file.id)}>
        <TiTimes size="17px" color="red" />
      </button>
    );
  };

  return (
    <ContainerMain>
      <Text>
        A tool that cuts videos into 30-second chunks. It&apos;s simple just
        {' '}
        <span>select</span>
        {' '}
        the video or videos to be cut and click
        {' '}
        <span>submit</span>
      </Text>

      <form onSubmit={handleSubmit}>
        <label htmlFor="upload">
          <input
            id="upload"
            type="file"
            /* accept="video/*" */
            multiple
            name="file"
            onChange={inputHandler}
          />
          Select
          <BsFillFileEarmarkPlayFill size="16px" />
        </label>

        {selectedFiles.length > 0 ? (
          <button type="submit">
            Submit
            <AiOutlineUpload size="17px" />
          </button>
        ) : (
          <span>
            Submit
            <AiOutlineUpload size="17px" />
          </span>
        )}
      </form>

      <ContainerFiles>
        {selectedFiles.length > 0 ? (
          <ListFiles>
            {selectedFiles.map(file => {
              const strLimit = selectedFiles.length > 1 ? 48 : 60;

              return (
                <ItemFile
                  key={file.id}
                  title={file.name}
                  alreadyDownloaded={file.alreadyDownloaded}
                  isSuccess={file.isSuccess}
                  onMouseOver={() => setIsHover(file.id)}
                  onMouseLeave={() => setRemoveHover(file.id)}
                >
                  {file.name.length > strLimit
                    ? `${file.name.substr(0, strLimit)}...`
                    : file.name}
                  {checkButton(file)}
                </ItemFile>
              );
            })}
          </ListFiles>
        ) : (
          <h1>Maximum size 500MB</h1>
        )}
      </ContainerFiles>
    </ContainerMain>
  );
};

export default MainSection;
