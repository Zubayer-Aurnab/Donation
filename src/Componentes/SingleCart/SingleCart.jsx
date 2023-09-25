import { Link } from "react-router-dom";


const SingleCart = ({ item }) => {

    const { picture, title, category, category_bg, card_bg, text_button_bg } = item

    return (
        <Link to={`/cartDetails/${item.id}`}>

            <div style={{ backgroundColor: `${card_bg}`, color: `${text_button_bg}` }} className={`card  bg-base-100 shadow-xl   flex flex-grow `}>
                <div className="flex flex-grow justify-center w-full ">
                    <img
                        className="h-80 w-full object-cover"
                        src={picture}
                        alt="Shoes"
                    />
                </div>
                <div className="card-body flex flex-grow">

                    <div className="mb-2">
                        <span className="p-2 rounded-lg " style={{ fontSize: '16px', fontWeight: 'bold', backgroundColor: `${category_bg}` }}>{category}</span>
                    </div>

                    <h2 className="card-title">{title}</h2>

                </div>
            </div>

        </Link>
    );
};

export default SingleCart;