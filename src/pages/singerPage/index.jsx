import React from 'react'
import { useParams } from 'react-router-dom';
import { singer } from '../../constants/data'

const SinglePage = () => {
  const params = useParams();
  console.log(params, 'params');

  const data = singer.find(_singer => _singer.id === params.idSinger);

  // ? optional chaining
  return (
    <div>
      <div>Name: {data?.name}</div>
    </div>
  )
}

export default SinglePage
