import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { localStorageContext } from '../../App';

const AddNewPost = () => {
    const { register, handleSubmit, errors } = useForm();
    const [store, setStore] = useContext(localStorageContext)
    const history = useHistory()
    const location = useLocation()
    console.log(location.state)
   
    const onSubmit = data => { 
        const newPost = { 
            userId: location.state, 
            id: store.length+1,
            title : data.title,
            body: data.body,
            }
       
        const allpost = [...store, newPost]
        localStorage.setItem('user',JSON.stringify(allpost))
        setStore(allpost)
        console.log(allpost) 
        history.push({
            pathname: `/profile`,
        })
   
    };
   
      
    

    return (
        <div className="col-md-5 p-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <input name="title" className="form-control" type="text" placeholder= 'Enter Post Title' ref={register({ required: true, minLength: 3 })} />
                {errors.title && <span className='error'>*Required, minimum 3 charecters  </span>}
            </div> <br/>

            <div className="form-group">
                <input name="body" className="form-control" type="text"  placeholder= 'Enter Post Description' ref={register({ required: true, minLength: 3  })} />
                {errors.body && <span className='error'>*Required, minimum charecters 3 </span>}
            </div> <br/>

            <button className="btn text-white bg-primary px-5" type='submit' >Send</button>
        </form>
    </div>
    );
};

export default AddNewPost;