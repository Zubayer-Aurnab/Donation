import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Label, Tooltip } from 'recharts';

const Statistics = () => {
    const [totalData, SetTotaldata] = useState([]);
    const [donate, setDonate] = useState([]);

    useEffect(() => {

        fetch('api.json')
            .then((response) => response.json())
            .then((data) => {
                SetTotaldata(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

        const Donation = JSON.parse(localStorage.getItem('donation'));
        setDonate(Donation);
    }, []);

    // Calculate the percentage of "Donation added" relative to "Total Donation"
    const totalDonationCount = totalData.length;
    const donationAddedCount = donate.length;
    const donationPercentage = (donationAddedCount / totalDonationCount) * 100;
    const donationDifference = totalDonationCount - donationAddedCount;

    const data = [
        { name: 'Total Donation', value: totalDonationCount, color: 'red' },
        { name: 'Donation added', value: donationAddedCount, color: '#00C49F' },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white border border-gray-300 rounded-lg p-2">
                    <p className="font-semibold">{data.name}</p>
                    <p>Value: {data.value}</p>
                    <p>Percentage: {((data.value / totalDonationCount) * 100).toFixed(2)}%</p>
                    <p>Donation Difference: {donationDifference}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className="w-full h-96">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} label>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}



                        </Pie>
                        <Legend />
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;
