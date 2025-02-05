import React, { useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(0)
    return (
        <>
            <div className='ml-4'>
                <div className="w-64 bg-gray-800 text-white p-4 rounded-md shadow-lg text-center mt-4 pt-4">
                    <h1 className="text-xl font-bold mb-4">Counter App</h1>
                    <p className="text-2xl font-semibold mb-4">{counter}</p>
                    <div className="flex justify-between">
                        <button onClick={() => setCounter(counter - 1)} className="bg-red-500 hover:bg-red-600">-</button>
                        <button onClick={() => setCounter(counter + 1)} className="bg-green-500 hover:bg-green-600">+</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Counter