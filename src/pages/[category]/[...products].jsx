import { useRouter } from "next/router";


export default function products(){
    const router = useRouter()
    console.log(router)

    return(
        <div>
            <h2>Products!</h2>
            <p>{router.query.category} | {router.query.products}</p>
        </div>
    )
}