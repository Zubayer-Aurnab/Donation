

const DonationCard = ({ donate }) => {
    console.log(donate);
    const { picture, title, category, category_bg, card_bg, text_button_bg, price } = donate
    return (
        <div className="w-5/6 mx-auto">
            <div style={{ backgroundColor: `${card_bg}` }} className="relative flex  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-80 w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 style={{color:`${text_button_bg}`}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
                        <span className="p-2 rounded-lg" style={{ fontSize: '16px',  fontWeight: 'bold', backgroundColor: `${category_bg}` }}>{category}</span>
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        <samp style={{ color: `${text_button_bg}` }} className="font-semibold text-xl">${price}</samp>
                    </p>
                    <div>
                        <button style={{ backgroundColor: `${text_button_bg}` }} className="btn text-white">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;