import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, User } from "lucide-react";

const UserProfile = () => {
    let [data, getData] = useState({})
    let getUserData = localStorage.getItem('userData')
    useEffect(() => {
        if (getUserData) {
            getData(JSON.parse(getUserData))
            console.log(JSON.parse(getUserData))
        }
        else {
            getData({ name: "samplename", email: "sample@gmail.com", phone: "000000", address: "sample address" })
        }
    }, [])



    return (
        <div className="w-[50%] bg-slate-800 text-slate-100 mx-auto p-4 shadow-lg rounded-2xl">
            <div className="m-[15px_auto]">
                <User className="mx-auto" size={48}></User>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
                <p className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2" /> {data.email}
                </p>
                <p className="flex items-center justify-center mt-1">
                    <Phone className="w-4 h-4 mr-2" /> {data.phone}
                </p>
                <p className="flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 mr-2" /> {data.address}
                </p>
            </div>
        </div>
    );
};

export default UserProfile;
