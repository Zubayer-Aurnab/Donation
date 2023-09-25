import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie, Legend ,Cell} from 'recharts';

const Statistics = () => {

    const [totalData,SetTotaldata] = useState([])
    const [donate,setDonate]=useState({})

        useEffect(()=>{
            const data = useLoaderData
            SetTotaldata(data)
        },[])
        useEffect(() => {
            const Donation = JSON.parse(localStorage.getItem('donation'))
            setDonate(Donation)
        }, [])

    const data = [
        { name: 'Total Donation', value:`${totalData.length}`, color: 'red' }, 
        { name: 'Donation added', value: 1, color: '#00C49F' }, 
    ];

    return (
        <>
            <div style={{ width: '100%', height: 600 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} label>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;