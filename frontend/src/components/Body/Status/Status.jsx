import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Status.css";
import LogoImage from "./fitConnectLogo.png";

function Status() {
    const [isBooked, setIsBooked] = useState(false);
    const [data, setData] = useState({ units: 0, days: 0, amount: 0 });

    useEffect(() => {
        // Fetch the user's booking information from the API
        const fetchBookingData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/bookings/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                    },
                });

                const bookingData = response.data;
                if (bookingData[0].unit !== undefined) {
                    setIsBooked(true);
                    setData({
                        units: bookingData[0].unit,
                        days: bookingData[0].days,
                        amount: bookingData[0].amount,
                    });
                } else {
                    setIsBooked(false);
                    setData({ units: 0, days: 0, amount: 0 });
                }
            } catch (error) {
                console.error('Error fetching booking data:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        };

        // Call the fetchBookingData function when the component mounts
        fetchBookingData();
    }, []); // The empty dependency array ensures this effect runs only once on mount

    return (
        <main className="status-grid">
            <h1 className="welcomeText">Booking Status</h1>
            <div className="booking-message">
                <img src={LogoImage} alt="" />
                {isBooked ?
                    <p>You are booked to store on {data.units} unit(s) for {data.days} day(s) with packIT. The storage will cost R{data.amount}.</p> :
                    <p>You have no booking.</p>}
            </div>
        </main>
    );
}

export default Status;
