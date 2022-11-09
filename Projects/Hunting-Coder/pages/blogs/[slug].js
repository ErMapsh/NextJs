import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'
import axios from 'axios'

// Step 1; Find the file corresponding to the slug

const slug = () => {
  const [blog, setblog] = useState(null)
  const router = useRouter()

  useEffect(() => {
    console.log(router.isReady)
    if (!router.isReady) return;
    fetch()
  }, [router.isReady])

  const fetch = async () => {
    const { slug } = router.query
    const res = await axios.get(`/api/getblog?slug=${slug}`)
    // console.log("res",res.data)
    setblog(res.data)
  }


  return (
    blog && <div className={styles.container}>
      <h1>Title of the page is {blog.title}</h1>
      <hr />
      <p>Content is {blog.content}</p>
    </div>

  )
}

export default slug;
