import { useState, useEffect } from 'react'

// api key: Ma78GXkT1jtauhBGGWHXXhpAbsn6b9MHEr67Guvh


// create the fetch to only work with APOD, but passing in count later once this works
export const useFetch = () => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=Ma78GXkT1jtauhBGGWHXXhpAbsn6b9MHEr67Guvh&count=10"
  const [ data, setData] = useState(null)
  const [isPending , setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // creating controller in case of fetch failure
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)

      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const json = await response.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("the fetch was aborted.")
        } else {
          setIsPending(false)
          setError("could not fetch the data")
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [])

  return { data, isPending, error }
}
