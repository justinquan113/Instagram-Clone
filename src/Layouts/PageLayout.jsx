import { useLocation } from "react-router-dom"
import Sidebar from "../components/SideBar/SideBar"

function PageLayout({children}){
    const {pathname} = useLocation()
    return(
        <div className="home-page">
            
            {pathname !== "/auth" ? <Sidebar/> : null}
            
            <div className="home-main">
                {children}
            </div>
        </div>
    )
}

export default PageLayout