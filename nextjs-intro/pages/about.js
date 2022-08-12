import NavBar from "../components/NavBar";

export default function Jin(){
    return <div>
        <NavBar />
        <h1 className="active">About</h1>
        <style jsx>{`
            a {
                color: blue;

            }
        `}</style>
    </div>
}