import { useEffect, useState } from 'react'
// import Data from '../../assets/TeaData'
import './css/TeaCarousel.css'
import { teaFetch } from '../api/dataApi';

export default function TeaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [teaData, setTeaData] = useState(null)
  const teasPerPage = 3;

  useEffect(() => {
    async function fetchTeas() {
      const data = await teaFetch()
      setTeaData(data)
    }
    fetchTeas()
  }, [])


  const nextPage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % teas.length
    );
  };

  const prevPage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + teas.length) % teas.length 
    );
  };

  return (
    <div className='teaCarousel'>
      <button onClick={prevPage}>Previous</button>
      <div className='teaCarouselContainer'>
        {[...teas, ...teas].slice(currentIndex, currentIndex + teasPerPage).map((tea, index) => (
          <div className='teaCard' key={index}>
            <img className='teaImage' src={tea.image} alt={tea.name} />
            <p className='teaName'>{tea.name}</p>
          </div>
        ))} 
      </div>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}