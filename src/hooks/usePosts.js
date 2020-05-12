import { useEffect, useState } from 'react'
import axios from 'axios'

const usePosts = (after) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])

  const searchParams = new URLSearchParams({
    limit: '50'
  });
  if (after) {
    searchParams.set('after', after);
  }

  useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: `https://www.reddit.com/top.json?${searchParams.toString()}`,
    }).then(res => {
      setPosts(prevPosts => {
        return ([...prevPosts, ...res.data.data.children])
      })
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
  }, [after])

  return { loading, error, posts }
}

export default usePosts;
