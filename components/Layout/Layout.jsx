import Header from "../Header/header";

const Layout = ({children}) => {
    return (
        <div className="content">
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout;