import axios from 'axios'
import {useState,useEffect} from 'react'



function ApiCall1(){

    const [title,setTitle] = useState(null)

    const handleApi = ()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url).then((res)=>{
            setTitle(res.data) 
            console.log(res.data) 
        })
    }

    useEffect(()=>{
        handleApi()
    },[])

    return(
        <>
        <h2>Api call 1</h2>
        { title ? title.map((res) => {
            return(
                <>
                <h3>{res.title}</h3>
                <h5>{res.body}</h5>
                </>
            )
        }):'no data'}

        </>
    )
}
export default ApiCall1;