import Link from "next/link";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oooooops....</h1>
            <p>Page not found!</p>
            <p>Please go back to <Link href="/">Homepage</Link></p>
        </div>
    )
}

export default NotFound;