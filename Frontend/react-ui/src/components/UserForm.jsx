import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useState } from "react";

export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.address) newErrors.address = "Address is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData);
        }
    };

    return (

        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold text-center mb-4">User Form</h2>
            <form onSubmit={handleSubmit}>
                <VStack spacing={2}>
                    <FormControl isInvalid={errors.name}>
                        <FormLabel className="block text-sm font-medium text-gray-700">Name</FormLabel>
                        <Input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300" />
                        {errors.name && <Text color="red.500">{errors.name}</Text>}
                    </FormControl>

                    <FormControl isInvalid={errors.email}>
                        <FormLabel className="block text-sm font-medium text-gray-700">Email</FormLabel>
                        <Input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300" />
                        {errors.email && <Text color="red.500">{errors.email}</Text>}
                    </FormControl>

                    <FormControl isInvalid={errors.phone}>
                        <FormLabel className="block text-sm font-medium text-gray-700">Phone Number</FormLabel>
                        <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300" />
                        {errors.phone && <Text color="red.500">{errors.phone}</Text>}
                    </FormControl>

                    <FormControl isInvalid={errors.address}>
                        <FormLabel className="block text-sm font-medium text-gray-700">Address</FormLabel>
                        <Input type="text" name="address" value={formData.address} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300" />
                        {errors.address && <Text color="red.500">{errors.address}</Text>}
                    </FormControl>

                    <Button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">Submit</Button>
                </VStack>
            </form>
        </div>
    );
}
