
import { useFetch } from "../hooks/UseFetch";

// styles
import './ImageList.css'

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ImageList() {
  const { data: images, isPending, error } = useFetch()

  const handleClick = (e) => {
    const classlist = e.target.classList
    if (classlist.value === '') {
      classlist.add('liked')
    } else{
      classlist.remove('liked')
    }
  }

   return (
     <>
      { isPending && <div className="image-pending">Pending...</div>}
      { error && <div>There was an error retrieving the data. Please try again.</div>}

      <ul className="image-list">
        { images && images.map(image => (
        <li key={image.date}>
          <div className="card-image">
            <img src={image.url} alt={image.title} />
            <div className="card-image-info">
              <div className="card-title-like">
                <h3>{image.title}</h3>
                <button  className="like" onClick={handleClick}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <p>{image.explanation}</p>
              <p className="time-text">Image taken on {image.date}</p>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </>
  )
}
