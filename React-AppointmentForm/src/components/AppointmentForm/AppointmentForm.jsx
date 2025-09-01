import React, { useState } from "react";
import "./AppointmentForm.css"; // Create this CSS file for styling

export default function AppointmentForm() {
    const [formData, setFormData] = useState({
        patientType: "returning",
        petType: "dog",
        name: "",
        petName: "",
        email: "",
        phone: "",
        visitType: "general",
        date: "",
        comments: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Appointment Scheduled Successfully!");
    };

    return (
        <div className="form-container">
            <h2>Book Appointment</h2>
            <hr />
            <p className="subtitle">
                Trusted vet care for your pet's unique needs.
            </p>

            <form onSubmit={handleSubmit}>

                <div className="options">
                    <label>
                        <input
                            type="checkbox"
                            name="patientType"
                            value="first-time"
                            checked={formData.patientType === "first-time"}
                            onChange={handleChange}
                        />
                        First-time Patient
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="patientType"
                            value="returning"
                            checked={formData.patientType === "returning"}
                            onChange={handleChange}
                        />
                        Returning Patient
                    </label>
                </div>


                <div className="options1">
                    {["dog", "cat", "rabbit", "other"].map((type) => (
                        <label key={type}>
                            <input
                                type="radio"
                                name="petType"
                                value={type}
                                checked={formData.petType === type}
                                onChange={handleChange}
                            />
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </label>
                    ))}
                </div>


                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="petName"
                        placeholder="Pet's Name"
                        value={formData.petName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <select
                        name="visitType"
                        value={formData.visitType}
                        onChange={handleChange}
                    >
                        <option value="general">General</option>
                        <option value="checkup">Checkup</option>
                        <option value="emergency">Emergency</option>
                    </select>

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <textarea
                    name="comments"
                    placeholder="Additional Information"
                    value={formData.comments}
                    onChange={handleChange}
                />

                <button type="submit" className="submit-btn">
                    Schedule Now
                </button>
            </form>
        </div>
    );
}
