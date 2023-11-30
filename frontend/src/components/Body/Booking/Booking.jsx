import "./Booking.css";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import axios from "axios";
import LogoImage from "../Status/fitConnectLogo.png";

function Booking() {
    const [formData, setFormData] = useState({ unit: '', days: '' });
    const [bookings, setBookings] = useState([]);
    const [isBooked, setIsBooked] = useState(false);
    const [bookingCreated, setBookingCreated] = useState(false);

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
                console.log(bookingData)
                console.log(bookingData.length)
                if (bookingData.length > 0) {
                    setIsBooked(true);
                }
            } catch (error) {
                console.error('Error fetching booking data:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                }
            }
        };
        fetchBookingData();
    }, []); 

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData(currentData => ({ ...currentData, [changedField]: newValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const amount = (formData.days * 12).toFixed(2);
    
        const newBooking = { unit: formData.unit, days: formData.days, amount: amount };
    
        try {
            const response = await axios.post('http://localhost:8000/api/bookings/', newBooking, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                },
            });
    
            setBookings(currentBookings => [...currentBookings, response.data]);
    
            setFormData({ unit: '', days: '' });
            alert("The booking was successfully confirmed");
            setBookingCreated(true);
        } catch (error) {
            console.error('Error adding note:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
            }
        }
    };

    if (bookingCreated){
        return <Navigate to='/menu'/>
    }
    

    return (
        <main className="booking-grid">
            <h1 className="welcomeText">Book a storage</h1>
            {isBooked? 
            <div className="booking-message">
            <img src={LogoImage} alt="" />
                <p>You currently have an active booking with us, so you cannot make another reservation at this time.</p>
            </div>
            : <form onSubmit={handleSubmit} className="application-form">
                <div className="form-input">
                    <label htmlFor="unit">Choose a unit:</label>
                    <select name="unit" id="unit" value={formData.unit} required onChange={handleChange}>
                        <option value="" disabled>Select a unit</option>
                        <option value="one Unit">One Unit</option>
                        <option value="two Units">Two Units</option>
                        <option value="three Units">Three Units</option>
                    </select>
                </div>
                <div className="form-input">
                    <label htmlFor="days">Enter the number of days:</label>
                    <input type="number" name="days" id="days" value={formData.days} onChange={handleChange} required />
                </div>
                <button className="book-btn">Book a storage</button>
            </form>}
        </main>
    );
}

export default Booking;