import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Donation = () => {
    const [totalDonation, setTotalDonation] = useState([])

    const [noData, setNoData] = useState(false)

    const [show, setshow] = useState(false)

    useEffect(() => {
        const Donation = JSON.parse(localStorage.getItem('donation'))
        if (Donation) {
            setTotalDonation(Donation)
        }
        else {
            setNoData('No Donation')
        }
    }, [])



    return (
        <div>
            {
                noData ? <p className="text-3xl  h-[80vh] flex justify-center items-center" >{noData}</p>
                    :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-5/6 mx-auto">
                            {
                                show ? totalDonation.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)

                                    :
                                    totalDonation.slice(0, 4).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                            }
                        </div>
                        <div className="text-center  mt-10 mb-10">
                            {
                                totalDonation.length > 4 ? <button onClick={() => setshow(!show)} className="btn hover:bg-[#009444] bg-[#009444] text-white">
                                    {
                                        show ? " See Less" : "See More"
                                    }
                                </button> : ""
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donation;