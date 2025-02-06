import React, { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { useSpring, animated } from 'react-spring'

function Counter() {
    let value = localStorage.getItem('counter') || 0
    let [counter, setCounter] = useState(Number(value))

    const numberSpring = useSpring({
        number: counter,
        config: { tension: 200, friction: 20 }
    })
    const backgroundSpring = useSpring({
        backgroundColor: `rgba(50, 130, 10, ${counter / 10})`,
        config: { tension: 200, friction: 20 },
    });
    function increment() {
        setCounter(counter + 1)
        localStorage.setItem('counter', counter + 1)
    }
    function decrement() {
        if (counter === 0) return
        setCounter(counter - 1)
        localStorage.setItem('counter', counter - 1)
    }

    function reset() {
        setCounter(0)
        localStorage.setItem('counter', 0)
    }
    return (
        <>
            <animated.div className='m-[0px_auto] h-screen py-8 w-[90%] rounded-md flex justify-center' style={{ ...backgroundSpring, transition: "background 0.5s ease-in-out" }}>
                <div className="w-64 h-[300px] bg-gray-800 text-white p-4 rounded-md shadow-lg text-center mt-4 pt-4">
                    <h1 className="text-xl font-bold mb-4">Counter App</h1>
                    <p className='text-center text-xl'>Increment counter to change color</p>
                    <animated.p className="text-2xl font-semibold mb-4">{numberSpring.number.to((n) => n.toFixed(0))}</animated.p>
                    <div className="flex justify-between">
                        <button onClick={decrement} className="bg-red-500 rounded-md p-2 hover:bg-red-600">
                            <Minus size={18} />
                        </button>
                        <button onClick={reset} className="bg-blue-500 rounded-md p-2 hover:bg-blue-600">
                            Reset
                        </button>
                        <button onClick={increment} className="bg-green-500 rounded-md p-2 hover:bg-green-600">
                            <Plus size={18} />
                        </button>
                    </div>
                    
                </div>
                
            </animated.div>

        </>
    )
}

export default Counter