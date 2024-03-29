import React, { useEffect } from 'react'

import TagPill from '../components/TagPill'
import { tagsHook } from '../hooks/'
import { getTags } from '../helpers/api'

export default function () {
  const [tags, setTags] = tagsHook.useHook()

  async function fetchTags () {
    const data = await getTags()

    setTags(data)
  }

  useEffect(() => {
    fetchTags()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="home-page">

      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">

          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="/">Your Feed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">Global Feed</a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/Qr71crq.jpg" alt="" />
                </a>
                <div className="info">
                  <a href="/" className="author">Eric Simons</a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a href="/" className="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" alt="" /></a>
                <div className="info">
                  <a href="/" className="author">Albert Pai</a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="/" className="preview-link">
                <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                {tags.map((tag, i) => (
                  <TagPill to={`?tag=${tag}`} key={i}>{tag}</TagPill>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
