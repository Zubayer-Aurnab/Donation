
import { useEffect, useState } from "react";

import SingleCart from "../SingleCart/SingleCart";



const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // State to store filtered data
    const [inputVal, setInputVal] = useState('');

    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            });
    }, []);

    const getData = (val) => {
        setInputVal(val.target.value);
    };
    const handleSearch = () => {

        const filtered = data.filter(item =>
            item.category.toLowerCase() === inputVal.toLowerCase()
        );

        if (filtered.length > 0) {
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };
    console.log(inputVal);

    return (
        <>
            <div>
                <div className="hero h-[70vh] bg-white bg-opacity-60" style={{ backgroundImage: 'url(https://i.ibb.co/T2HBcHq/3226146-43091.jpg)' }}>
                    <div className="hero-overlay bg-white bg-opacity-95"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                            <p className="mt-14">
                                <input onChange={getData} placeholder="category name..." className="w-5/6 border-2 border-black p-4 rounded-lg text-black " type="text" name="" id="" />
                                <button onClick={handleSearch} className="p-4 px-5 rounded-lg  bg-[#FF444A] text-base font-semibold"> Search</button>
                            </p>

                        </div>
                    </div>
                </div>




                <div className=" w-5/6 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-28">
                    {
                        filteredData.map(item => <SingleCart key={item.id} item={item}></SingleCart>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;