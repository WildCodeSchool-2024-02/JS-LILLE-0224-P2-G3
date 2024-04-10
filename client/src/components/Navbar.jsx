
function Navbar(){
    return(
        <div className="navBar">
            <div className="title">
                <h1>Ready Player Found</h1>
            </div>
            <div className="imgLogo">
                <p>ici image logo</p>
            </div>
            <div className="anchorNavbar">
            <ul>
                <li>TENDANCES</li>
                <li>STREAMING</li>
                <li>CATEGORIES</li>
            </ul>
            <div className="filterNavbar">
                <input type="search"/>
            </div>
            <div className="logoProfil">
                <p>ici image logo profil</p>
            </div>
            </div>


        </div>

    )
}
   
export default Navbar