import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError]= useState(null);

    useEffect(()=>{
            fetch(url)
            .then((res) => {
                if (!res.ok){
                    throw Error('Could not fetch the data from this resource');
                }
                return res.json()
		    })
            .then((data) => {
	                setData(data)
	                setLoading(false)
	                setError(null)
		    })
            .catch((err)=>{
                if (err.name === "AbortError"){
                    console.log("fetch aborted");
                } else {
                    setError(err.message)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {data, isLoading, error}
}

export default useFetch;