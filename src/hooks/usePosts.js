import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import { addPosts } from "../redux/allPostsSlice";
import usePrevious from "./usePrevious";

const usePosts = (after) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const previousAfterTag = usePrevious(after);
  const posts = useSelector(state => state.allPosts);
  const selectedPost = useSelector(state => state.allPosts.find(p => {
      return p.data.id === state.selectedPost;
  }

  ))
  const dispatch = useDispatch();

  const loadPosts = useCallback(async() => {
    const searchParams = new URLSearchParams({
      limit: '50'
    });
    if (after) {
      searchParams.set('after', after);
    }
    try {
      setLoading(true)
      setError(false)
      const response = await axios({
        method: 'GET',
        url: `https://www.reddit.com/top.json?${searchParams.toString()}`,
      })
      dispatch(addPosts(response.data.data.children));
      setLoading(false)
    } catch (e) {
      if (axios.isCancel(e)) return
      setError(true)
    }
  }, [after]);

  useEffect(() => {
    if(after === previousAfterTag) return ;
    loadPosts();
  }, [dispatch, loadPosts, previousAfterTag])

  return { loading, error, posts, selectedPost, loadPosts }
}

export default usePosts;
