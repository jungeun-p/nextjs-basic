import { useRouter } from "next/router"

export default function Default(){
    const router = useRouter();
    return (
        <div>
            <h4>{router.query.title || "loading..."}</h4>
        </div>
    )
}