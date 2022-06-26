import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/app/store';
import { LOAD_POST } from '../redux/feature/postSlice';

const Posts = () => {
    
  const {posts} = useSelector((state:RootState)=>state.allPost)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch('http://localhost:5000/post')
    .then(res=>res.json())
    .then(data=>dispatch(LOAD_POST(data)))

  },[])
  console.log(posts)
    return (
        <div>
            
        </div>
    );
};

export default Posts;