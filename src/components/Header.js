export const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="logo img"/>
                <div>
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex align-center">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/card.svg" alt="card icon"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/like.svg" alt="like icon"/>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="card icon"/>
                </li>
            </ul>
        </header>
    )
}