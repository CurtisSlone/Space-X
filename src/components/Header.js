import '../style/Header.scss'
const Header = () => {
    return(
        <div className="header">
            <div className="header__top">
                <img className="header__logo" src="https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png" alt="space-X" />
                
            </div>
            <div className="header__bottom">
                <ul>
                    <li> Flight Name</li>
                    <li> Flight Date </li>
                </ul>
            </div>
        </div>
    )
};

export default Header