import React, { useState } from 'react';

const AddressPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        houseNo: '',
        streetName: '',
        city: '',
        state: '',
        postalCode: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission logic here, e.g., sending data to the server.
        console.log(formData);
    };

    return (
        <div className="max-w-3xl my-10 mx-auto bg-white mt-8 p-6 border rounded-lg shadow-lg">
            <h2 className="text-4xl text-center font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {/* First Name and Last Name */}
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-600">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-600">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    {/* Email and Phone Number */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    {/* House No and Street Name */}
                    <div className="mb-4">
                        <label htmlFor="houseNo" className="block text-gray-600">House No</label>
                        <input
                            type="text"
                            id="houseNo"
                            name="houseNo"
                            value={formData.houseNo}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="streetName" className="block text-gray-600">Street Name</label>
                        <input
                            type="text"
                            id="streetName"
                            name="streetName"
                            value={formData.streetName}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    {/* City and State */}
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-600">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-600">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>

                    {/* Postal Code */}
                    <div className="mb-4 col-span-2">
                        <label htmlFor="postalCode" className="block text-gray-600">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="border rounded-md w-full p-2 focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 my-10 font-bold text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 "
                >
                    Continue
                </button>
            </form>
        </div>
    );

};

export default AddressPage;
