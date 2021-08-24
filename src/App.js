import { Card } from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {useEffect, useState} from "react";

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cardOpened, setCardOpened] = useState(false);



    useEffect(() => {
        fetch("https://61237a91124d88001756829a.mockapi.io/items")
            .then((res) => {return res.json()})
            .then(json => setItems(json));
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    };

    return (
        <div className="wrapper clear">
        {
            cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)}/>
        }

        <Header onClickCard={() => setCardOpened(true)} />
        <div className="content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <h1 className="">Все кросовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input type="text" placeholder="Поиск"/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {
                    items.map(({name, price, imageUrl}, index) => (
                        <Card
                            key={index}
                            title={name}
                            price={price}
                            imageUrl={imageUrl}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorite={() => alert("You click to Favorite")}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default App;
