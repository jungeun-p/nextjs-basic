import { useRouter } from "next/router"

export default function Default(){
    const router = useRouter();
    console.log(router);
    return "detail"
}