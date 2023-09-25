

const Banner = () => {
    return (
        <div className="hero h-[70vh] bg-white bg-opacity-60" style={{ backgroundImage: 'url(https://i.ibb.co/T2HBcHq/3226146-43091.jpg)' }}>
            <div className="hero-overlay bg-white bg-opacity-95"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <p className="mt-14">
                        <input placeholder="Search here..." className="w-5/6 border-2 border-black p-4 rounded-lg " type="text" name="" id="" />
                        <button className="p-4 px-5 rounded-lg  bg-[#FF444A] text-base font-semibold"> Search</button>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Banner;