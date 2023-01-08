import { useState } from 'react';
import uuid from 'react-uuid';
import { AiOutlineUpload, AiOutlineReload } from 'react-icons/ai';
import { TiTimes } from 'react-icons/ti';
import { MdDownloadDone } from 'react-icons/md';
import Text from '../text';
import ContainerMain, { ContainerFiles } from './style';

const MainSection = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const inputHandler = ({ target }) => {
    const files = [...target.files].map(f => {
      const curFile = f;
      curFile.id = uuid();
      curFile.isSuccess = false;
      curFile.isUploaded = false;

      return curFile;
    });
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleSubmission = e => {
    e.preventDefault();
  };

  const removeFile = id => {
    const filteredFiles = selectedFiles.filter(f => f.id !== id);

    setSelectedFiles(filteredFiles);
  };

<<<<<<< HEAD
  const reUpload = id => {
    console.log(id);
  };

=======
>>>>>>> master
  const checkButton = (isSuccess, isUploaded, id) => {
    if (!isUploaded) {
      return (
        <button type='button' title='Remove' onClick={() => removeFile(id)}>
          <TiTimes size='17px' color='red' />
        </button>
      );
    }

    if (!isSuccess) {
      return (
        <button type='button' title='Reuploada'>
          <AiOutlineReload size='17px' />
        </button>
      );
    }

    return (
      <button type='button'>
        <MdDownloadDone size='17px' />
      </button>
    );
  };

  return (
    <ContainerMain>
      <Text>
        A tool that cuts videos into 30-second chunks. It&apos;s simple just <span>select</span> the
        video or videos to be cut and click <span>submit</span>
      </Text>

      <form onSubmit={handleSubmission}>
        <label htmlFor='upload'>
          <input
            id='upload'
            type='file'
            accept='video/*'
            multiple
            name='file'
            onChange={inputHandler}
          />
          Select
        </label>

        {selectedFiles.length > 0 ? (
          <button type='submit'>
            Submit <AiOutlineUpload size='17px' />
          </button>
        ) : (
          <span>
            Submit <AiOutlineUpload size='17px' />
          </span>
        )}
      </form>

      <div>
        {selectedFiles.length > 0 ? (
          <ContainerFiles>
            {selectedFiles.map(file => {
              const strLimit = 48;

              return (
                <li key={file.id} title={file.name}>
                  {file.name.length > strLimit ? `${file.name.substr(0, strLimit)}...` : file.name}
                  {checkButton(file.isSuccess, file.isUploaded, file.id)}
                </li>
              );
            })}
          </ContainerFiles>
        ) : (
          <h1>Maximum size 500MB</h1>
        )}
      </div>
    </ContainerMain>
  );
};

export default MainSection;
