import React from 'react'
import { singer } from '../../constants/data'
import { useNavigate, generatePath } from 'react-router-dom'
import { APP_ROUTER } from '../../constants/appRouter';

const HomePage = () => {
  const navigate = useNavigate();
  const handleRedirectToSinglePage = (id) => {
    navigate(
      generatePath(APP_ROUTER.SINGER_DETAIL, { idSinger: id })
    );
  }

  return (
    <div>
      <ul>
        {
          singer.map((_singer) => {
            return <li
              onClick={() => handleRedirectToSinglePage(_singer.id)}>
              {_singer.name}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default HomePage
