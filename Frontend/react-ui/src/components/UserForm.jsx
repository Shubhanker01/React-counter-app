import { useState } from "react";
import UserProfile from "./UserProfile";
import { toast } from "react-toastify";
import { nanoid } from 'nanoid'

export default function ContactForm() {
    const [dirty, isDirty] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        isDirty(true)
        window.addEventListener('beforeunload', (e) => {
            if (dirty) {
                e.preventDefault()
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Your data is successfully saved", { position: "top-center" })
        let id = nanoid()
        formData.id = id
        localStorage.setItem('userData', JSON.stringify(formData))
        setFormData({ ...formData, name: "", email: "", phone: "", address: "" })
        isDirty(false)
    };

    return (
        <>
            <div className="grid grid-cols-2 py-8">
                <div className="w-[70%] mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                    <h2 className="text-xl font-bold mb-4">Contact Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-1">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Phone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1">Address</label>
                            <textarea name="address" value={formData.address} onChange={handleChange} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </form>
                </div>
                <div className="h-[50%]">
                    <UserProfile />
                </div>

            </div>


        </>


    );
}
