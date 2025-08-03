import Spinner from '../components/Spinner'
import { useState , useEffect} from 'react'
import Product from '../components/Product'

const url='https://fakestoreapi.com/products'
export default function Home(){
    const [isLoading,setLoading]=useState(false)
    const [posts, setPosts]=useState([])
    async function fetchData(){
        setLoading(true)
        try{
            let data=await fetch(url)
            data=await data.json()
            setPosts(data)
        }
        catch{
            console.log("there is problem with an API call")
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="products">
            <div className='container'>
                {
                    isLoading ? <Spinner/> :
                    posts.length===0 ? (<p>NO POSTS FOUND!</p>) :
                    (posts.map((post)=>(
                        <Product key={post.id} post={post}/>
                    )))
                }
            </div>
        </div>
    )
}