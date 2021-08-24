import style from './Card.module.scss'
import {useState} from "react";

export const Card = ({ title, price, imageUrl, onPlus, onFavorite}) => {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({ title, price, imageUrl });
        setIsAdded(!isAdded);
    }

    return (

        <div className={style.card}>
            <div className={style.favorite} onClick={onFavorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers"/>
            <h5>
                { title }
            </h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{ price } руб.</b>
                </div>
                <img className={style.plus} onClick={onClickPlus} src={ isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="icon"/>
            </div>
        </div>
    )
}