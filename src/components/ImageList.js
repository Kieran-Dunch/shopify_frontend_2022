
import { useFetch } from "../hooks/UseFetch";

// styles
import './ImageList.css'

export default function ImageList() {
   const { data: images, isPending, error } = useFetch()
    console.log(images);

   return (
     <div>
      <h2>Here's where our image list will be:</h2>
      <ul>
        { images && images.map(image => (
        <li key={image.date}>
          <img src={image.url} alt={image.title} />
          <h3>{image.title}</h3>
          <p>{image.explanation}</p>
        </li>
        ))}
      </ul>
    </div>
  )
}
