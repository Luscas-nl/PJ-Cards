import './Header.css'

function Header(props) {
    return(
        <div class="header">
            <a href="#" class="headerLogo">PJ Cards</a>
            <div className="boxLinks">
                <a href="#" className='linkHeader'>Home</a>
                <a href="#" className='linkHeader'>Cards</a>
                <p href="" className='buttonHeader'>Buy Card</p>
            </div>
        </div>
    )
}

export default Header