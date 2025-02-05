import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

function Counter() {
    let [counter, setCounter] = useState(0)
    const backgroundStyle = {
        background: `linear-gradient(to top, rgba(0, 255, 0, ${counter / 10}) 0%, rgba(0, 0, 0, 1) 100%)`,
        transition: "background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)"
    };
    return (
        <>
            <div className='m-[0px_auto] h-screen py-8 w-[90%] rounded-md flex justify-center' style={backgroundStyle}>
                <div className="w-64 h-[200px] bg-gray-800 text-white p-4 rounded-md shadow-lg text-center mt-4 pt-4">
                    <h1 className="text-xl font-bold mb-4">Counter App</h1>
                    <p className="text-2xl font-semibold mb-4">{counter}</p>
                    <div className="flex justify-between">
                        <button onClick={() => setCounter(counter - 1)} className="bg-red-500 rounded-md p-2 hover:bg-red-600">
                            <Minus size={18} />
                        </button>
                        <button onClick={() => setCounter(0)} className="bg-blue-500 rounded-md p-2 hover:bg-blue-600">
                            Reset
                        </button>
                        <button onClick={() => setCounter(counter + 1)} className="bg-green-500 rounded-md p-2 hover:bg-green-600">
                            <Plus size={18} />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counter