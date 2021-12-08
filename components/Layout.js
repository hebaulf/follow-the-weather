import Header from "./Header/header";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Header />
            { children }
            <footer></footer>
        </div>
    )
}

export default Layout;