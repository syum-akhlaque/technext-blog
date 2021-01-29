import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { articleContext, localStorageContext } from '../../App';
import './Blog.css'
const Blog = () => {

     
    const [post, setPost] = useState([])
    const [store, setStore] = useContext(localStorageContext)
    let localStore = JSON.parse(localStorage.getItem('user')) ||[]
   
    if(post.length && store.length<1 && localStore.length==0){
        localStorage.setItem('user',JSON.stringify(post))
        const storageData = JSON.parse(localStorage.getItem('user')) 
        setStore(storageData)
    }
    
    const [visiblePost, setVisiblePost] = useState(10)
    const [currentArticle, setCurrentArticle] = useContext(articleContext)
    const history = useHistory()
    const handleCurrentArticle = (id, title, body)=>{
        const currentArticleInfo ={
            id: id,
            title: title,
            body: body
        }
        setCurrentArticle(currentArticleInfo)
        history.push({ 
            pathname: `/post/${id}`,
        });
    }

    const showMoreItems = ()=>{
        setVisiblePost(preVal => preVal+10)
    }

     useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            setPost(data)
        })
     }, [])
   
    return (
        <div>
           
            <div className = 'row row-cols-md-5 px-5 blog '>
                {
                  localStore.length>0 && localStore.slice(0,visiblePost).map( post => 
                        <div className ='cards col mt-5 '  key={post._id} > 
                            <h5 className="card-title p-3">{post.title.slice(0,30)}</h5>
                            <p className="card-text">{post.body.slice(0,95)} ...<span className='text-primary read-more' onClick = {()=>handleCurrentArticle(post.id, post.title, post.body)}> Read More </span></p>
                        </div>  
                    )
                }
            </div>
          { (visiblePost <= post.length ) && <div className = 'text-center my-4'>
              <button  onClick= {showMoreItems} className = ' btn btn-warning '>Load More</button>
           </div>
           }
           

        </div>
    );
};

export default Blog;