
import { useEffect } from "react"
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
        <li>
          { images && <img src={images.url} alt={images.title} />}
        </li>
        <li>Image two</li>
        <li>Image three</li>
      </ul>
    </div>
  )
}
