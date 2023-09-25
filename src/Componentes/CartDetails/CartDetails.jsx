import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";



const CartDetails = () => {

    const [item, setTime] = useState({})

    const datas = useLoaderData()

    const { id } = useParams()


    useEffect(() => {
        const data = datas.find(cart => cart.id == id)
        setTime(data)
    }, [id, datas])



    const handelDonation = () => {
        const addDonation = []
        const Donation = JSON.parse(localStorage.getItem('donation'))
        if (!Donation) {
            addDonation.push(item)
            localStorage.setItem('donation', JSON.stringify(addDonation))
            swal("Good job!", "Donation Added", "success");
        } else {


            const isExist = Donation.find(data => data.id == item.id)
            if (!isExist) {
                addDonation.push(...Donation, item)
                localStorage.setItem('donation', JSON.stringify(addDonation))
                swal("Good job!", "Donation Added", "success");
            } else {
                swal("Already Added!", "No Duplicate", "error");
            }
        }
    }






    const { price, picture, description, title, text_button_bg } = item



    return (
        <>

            <div className="w-5/6 mx-auto ">
                <div className="hero h-[60vh]" style={{ backgroundImage: `url(${picture})` }}>
                    <div className=""></div>
                    <div className="hero-content text-center text-neutral-content">

                    </div>

                </div>
                <h1 className="p-4 relative bottom-20 hero-overlay bg-opacity-60">
                    <button onClick={() => handelDonation()} style={{
                        backgroundColor: `${text_button_bg}`
                    }} className="btn border-none text-lg font-semibold text-white"> Donate ${price}</button>

                </h1>
                <div className=" -mr-10">
                    <h1 className="text-5xl font-bold mb-7" >{title}</h1>
                    <p className="text-xl font-normal mb-8">{description}</p>
                </div>

            </div>

        </>
    );
};

export default CartDetails;