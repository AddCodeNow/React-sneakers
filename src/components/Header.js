import {Link} from "react-router-dom";


export const Header = ( { onClickCard }) => {

    return (
        <header className="d-flex justify-between align-center p-40">

            <Link to="/" exact>
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="logo img"/>
                    <div>
                        <h3 className="text-uppercase">REACT SNEAKERS</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>


            <ul className="d-flex align-center">
                <li className="mr-30 cu-p" onClick={onClickCard}>
                    <img width={18} height={18} src="/img/card.svg" alt="card icon"/>
                    <span>1205 руб.</span>
                </li>
                <li className="mr-10 cu-p">
                    <Link to="favorites">
                        <img width={18} height={18} src="/img/like.svg" alt="like icon"/>
                    </Link>
                </li>
                <li>
                    <img width={20} height={20} src="/img/user.svg" alt="card icon"/>
                </li>
            </ul>
        </header>
    )
}