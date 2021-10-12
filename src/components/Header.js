
const Header = () => {
    return(
        <div className="header">
            <div className="header__top">
                <img className="header__logo" src="https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png" alt="space-X" />
                <p>Choose a campaign by</p>
            </div>
            <div className="header__bottom">
                <ul>
                    <li> Patch </li>
                    <li> Flight Number </li>
                    <li> Flight Name</li>
                </ul>
            </div>
        </div>
    )
};

export default Header