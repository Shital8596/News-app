import React from 'react'

function NewsItem({data}) {
  return (
    <div className='outerDiv'>
        <div className='card-inner'>
          <div className='card-top'>
            <h1>{data?.source?.name}</h1>
            <a href={data?.url} rel='noreferrer' target='_blank'>
                {
                  (data?.urlToImage) ?
                  <img src={data?.urlToImage} alt={data?.name} /> :
                  <img src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" alt={data?.name} />
                }
            </a>
            <p>{data?.publishedAt}</p>
          </div>
          <div className='card-bottom'>
            <div className='card-info'>
              <h4>{data?.title}</h4>
              <p>{data?.description}</p>
            </div>
          </div>
          <div className='authorName'>
           {
            (data.author)? <p>___{data.author}</p> : <p>___Unknown</p>
           } 
          </div>
        </div>
    </div>
  )
}

export default NewsItem