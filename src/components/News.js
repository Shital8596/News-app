import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../NewsContext'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

function News() {

  const { text, fliterData, setFilterData, data, setData } = useContext(NewsContext)
  const [page, setPage] = useState(1);

  const totalCount = 19;
  const PageLimit = 5;
  const api = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ff69551f0353459f8059b5054d50c074"


  //Created a api call

  const getProductsList = () => {
    console.log("pageNo is", page)
    const queryParam = `&page=${page}&pageSize=${PageLimit}`
    const finalUrl = api + queryParam;

    axios.get(finalUrl)
      .then((res) => {
        const apiRes = res?.data
        setData(apiRes?.articles)
      }).catch((err) => console.log(err))
  }

  useEffect(() => {
    getProductsList()
  }, [])

  // To filter data

  useEffect(() => {
    if (text.length !== 0) {
      const newArr = data?.filter(product => product?.source?.name?.toLowerCase()?.includes(text?.toLowerCase()))
      console.log(newArr)
      setFilterData(newArr);
    } else {
      setFilterData(data);
    }
  }, [text])


  // For infinite scrolling

  const fetchMoreData = () => {
    setPage(prev => prev + 1)
    console.log("pageNo is", page)
    const queryParam = `&page=${page}&pageSize=${PageLimit}`
    const finalUrl = api + queryParam;

    axios.get(finalUrl)
      .then((res) => {
        const apiRes = res?.data
        const mergeData = [...data, ...apiRes?.articles]
        setData(mergeData)
        setFilterData(data)
      }).catch((err) => console.log(err))
  }

  //Rendering data

  return (
    <>
      <div className='titleDiv'>
        <h1>News Express</h1>
      </div>
      <InfiniteScroll
        dataLength={data?.length}
        next={(text.length == 0) && fetchMoreData}
        hasMore={data.length < totalCount}
        loader={<h4 className='loader'>Loading...</h4>}
      >
        <div className='container'>
          {
            (fliterData.length !== 0) ?
              fliterData?.map(item => <NewsItem data={item} />) :
              data?.map(item => <NewsItem data={item} />)
          }
        </div>
      </InfiniteScroll>
    </>
  )
}

export default News