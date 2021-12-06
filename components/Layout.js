import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <footer></footer>
        </div>
    )
}

export default Layout;