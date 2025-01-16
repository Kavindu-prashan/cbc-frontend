import axios from "axios"
export default function AdminProductsPage(){

    axios.get("http://localhost:5000/api/products").then((res)=>{
        console.log(res)
    })

    return(
        <div>Admin product Page</div>
    )
}