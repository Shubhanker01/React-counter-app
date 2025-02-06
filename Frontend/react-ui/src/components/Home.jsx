import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import decodeToken from '../utils/decodeToken';
import { toast } from 'react-toastify';
import { SquareActivity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid'

function Home() {
    const navigate = useNavigate()
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div>
                <SquareActivity color="#f2eeee" size={42} />
            </div>
            <div>
                <h1 className="text-3xl py-4 text-center text-slate-100 font-bold mb-6">React Counter Home</h1>
                <p className="text-lg text-gray-100 mb-6 max-w-lg text-center">
                    This is a simple counter application built with React and enhanced with animations
                    using react-spring.
                    Please sign in with Google to continue.
                </p>
            </div>

            <div className='mx-auto'>
                <div>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            let id = nanoid()
                            navigate(`/main-app/${id}`, { state: { user: decodeToken(credentialResponse.credential) } })
                            toast.success("Successfully logged in", { position: 'top-center' })

                        }}
                        onError={() => {
                            console.log('Login Failed');
                            toast.error('Login Failed', { position: 'top-center' })
                        }}
                        theme='dark'
                    />
                </div>

            </div>

        </div>
    )
}

export default Home