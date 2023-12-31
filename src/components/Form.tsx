import useName from '@/hooks/useName'
import { TextField } from '@mui/material'
import React from 'react'


function Form() {

    const {email, name, setEmail, setName, handleSubmit} = useName()

    return (
        <form className={`
        flex flex-1 flex-col items-center justify-center  gap-6 py-6 px-3
        shadow-xl bg-[#ffffffba] rounded-lg md:w-[80%] max-w-[100%] w-[100%] xl:w-[50%]
    `}>
            <div>
                <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="filled-basic" 
                    label="name" 
                    variant="outlined" 
                    className="max-w-[95%]" />
            </div>
            <div>
                <TextField 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="filled-basic" 
                    label="Email" 
                    variant="outlined" 
                    className="max-w-[95%]" />
            </div>

            <a
                onClick={handleSubmit}
                href="/main"
                className='py-3 text-[20px] px-14 bg-blue-50 text-light-50 h-max max-w-[100%] font-semibold rounded-md'>
                Get Start
            </a>
        </form>
        
    )
}

export default Form