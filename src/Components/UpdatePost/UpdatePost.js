import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { articleContext } from '../../App';

const UpdatePost = () => {
    const [currentArticle] = useContext(articleContext)
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory()
  

    let localStore = JSON.parse(localStorage.getItem('user')) ||[]
   
    const onSubmit = data => { 
       
        const currentpost = (localStore[currentArticle.id-1])
        currentpost.title = data.title
        currentpost.body = data.body
        localStorage.setItem('user',JSON.stringify(localStore))
        history.push({
            pathname: `/profile`,
        })
   
    };
   
    return (
        <div className="col-md-5 p-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group" rows="8">
                <input  name="title" className="form-control" type="text"  ref={register({ required: true, minLength: 3 })} defaultValue={currentArticle.title} />
                {errors.title && <span className='error'>*Required, minimum 3 charecters  </span>}
            </div> <br/>

            <div className="form-group">
                <textarea name="body" defaultValue={currentArticle.body} className="form-control" rows="8" ref={register({ required: true, minLength: 3  })}></textarea>
                {errors.body && <span className='error'>*Required, minimum charecters 3 </span>}
            </div> <br/>

            <button className="btn text-white bg-primary px-5" type='submit' >Update</button>
        </form>
    </div>
    );
};

export default UpdatePost;