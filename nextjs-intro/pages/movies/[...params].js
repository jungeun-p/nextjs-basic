import Seo from "../../components/Seo";

export default function Detail({ params }){
    const [title, id] = params; // pre-rendering 완료 후
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    )
}

export function getServerSideProps({params: { params }}){
    return {
        props: {
            params
        }
    }
}