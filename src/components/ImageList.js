
import { useFetch } from "../hooks/UseFetch";

// styles
import './ImageList.css'

export default function ImageList() {
   const { data: images, isPending, error } = useFetch()
    console.log(images);

   return (
     <>
      { isPending && <div className="image-pending">Pending...</div>}
      <ul className="image-list">
        { images && images.map(image => (
        <li key={image.date}>
          <div className="card-image">
          <img src={image.url} alt={image.title} />
            <div className="card-image-info">
              <h3>{image.title}</h3>
              <p>Image taken on {image.date}</p>
              <p>{image.explanation}</p>
            </div>
          </div>
        </li>
        ))}
      </ul>
    </>
  )
}
