import {Card} from "../components/Card";

export const Favorites = ({items, onAddFavorite}) => {
    return (
        <div className="content p-40">
            <div className="d-flex justify-between align-center mb-40">
                <h1>Мои Закладки</h1>

            </div>
            <div className="d-flex flex-wrap">
                {
                    items.map((item, index) => (
                        <Card
                            key={index}
                            favorite={true}
                            onFavorite={onAddFavorite}
                            {...item}
                        />
                    ))
                }
            </div>
        </div>
    )
}