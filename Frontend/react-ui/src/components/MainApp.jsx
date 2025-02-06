import React from 'react'
import Counter from './Counter'
import UserForm from './UserForm'
import TextEditor from './TextEditor'
import { useLocation } from 'react-router-dom'
function MainApp() {
    const location = useLocation()
    const user = location.state.user
    return (
        <>
            <div className='h-full'>
                <div className='pt-8 ml-8 w-[30%] rounded-2xl p-4 text-slate-100'>
                    <h2 className='ml-4 text-xl'>Welcome {user}</h2>
                </div>
                <div className='grid sm:grid-cols-2 gap-1'>
                    <Counter />
                    <TextEditor />
                </div>
                <UserForm />
            </div>

        </>
    )
}

export default MainApp