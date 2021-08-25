import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";

const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cardOpened, setCardOpened] = useState(false);



    useEffect(() => {
        axios.get("https://61237a91124d88001756829a.mockapi.io/items").then(res => {
            setItems(res.data);
        });
        axios.get("https://61237a91124d88001756829a.mockapi.io/Cart").then(res => {
            setCartItems(res.data);
        })
        axios.get("https://61237a91124d88001756829a.mockapi.io/favorites").then(res => {
            setFavorites(res.data);
        })
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://61237a91124d88001756829a.mockapi.io/Cart", obj);
        setCartItems(prev => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://61237a91124d88001756829a.mockapi.io/Cart/${id}`);
        setCartItems(prev => prev.filter(item => item.id !== id));

    }

    const onAddFavorite = async (obj) => {
        try {
            if ( favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://61237a91124d88001756829a.mockapi.io/favorites/${obj.id}`);
            } else {
                const {data} = await axios.post("https://61237a91124d88001756829a.mockapi.io/favorites", obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert("Не удалось добавить в фавориты")
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="wrapper clear">
        {
            cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem}/>
        }

        <Header onClickCard={() => setCardOpened(true)} />

        <Route path="/">
            <Home
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddFavorite={onAddFavorite}
                onAddToCart={onAddToCart}
            />
        </Route>
        <Route path="/favorites">
           <Favorites
               items={favorites}
               onAddFavorite={onAddFavorite}
           />
        </Route>

    </div>
  );
}

export default App;
