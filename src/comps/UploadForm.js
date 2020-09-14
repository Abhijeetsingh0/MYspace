import React,{useState} from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file , setFile ] = useState(null);
    const [error , setError ] = useState(null);
    const type = ['image/png','image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        console.log(selected);
    
        if(selected && type.includes(selected.type)){
            setFile(selected);
            setError('')
        }else{
            setFile(null);
            setError('Please select a vaild file (png/jpeg)');
        }
    }
    return (
        <div>
            <form>
                <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
                </label>
                <div className='output'>
                {error && <div className='erroe'> {error} </div>}
                {file && <div>{file.name}</div>} 
                {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm;
