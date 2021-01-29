import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import PostDetails from './Components/PostDetails/PostDetails';
import { createContext, useState } from 'react';
import MyProfile from './Components/MyProfile/MyProfile';
import User from './Components/User/User';
import AddNewPost from './Components/NewPost/AddNewPost';
import UpdatePost from './Components/UpdatePost/UpdatePost';
export const articleContext = createContext();
export const localStorageContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(2); 
  const [store, setStore] = useState([])
  const [currentArticle, setCurrentArticle] = useState({});
  return (
   
     
      <localStorageContext.Provider value={[store,setStore]}>
      <articleContext.Provider value = {[currentArticle,setCurrentArticle]} >
        <Router>
        <Header></Header>
         <Switch>
         <Route exact path='/'>
              <Blog ></Blog>
           </Route>
           <Route exact path='/blog'>
              <Blog></Blog>
           </Route>
           <Route  path='/profile'>
              <MyProfile></MyProfile>
           </Route>
           <Route exact path='/user'>
              <User></User>
           </Route>
           <Route exact path='/addNewPost'>
              <AddNewPost></AddNewPost>
           </Route>
           <Route exact path='/updatePost'>
              <UpdatePost></UpdatePost>
           </Route>
           <Route  path='/post/:postId'>
              <PostDetails></PostDetails>
           </Route>
           <Route path='*'>
              <h2 style={{textAlign:"center"}}> 4O4  not found</h2>
           </Route>
         </Switch>
       </Router>
      </articleContext.Provider>
      </localStorageContext.Provider>
  );
}

export default App;
