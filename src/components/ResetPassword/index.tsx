import {useState} from 'react'

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {useRef, useEffect} from 'react';

const ResetPassword = () => {
    const ref = useRef(null);
    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);

    const handleToggle = (e: { target: { id: string; }; }) =>{    
        if(type==='password'){
            // if ("1" == e.target.id )
            {
                setIcon(eye);      
                setType('text');
            }
        }

        else{
            setIcon(eyeOff);     
            setType('password');
        }
    }

    return (
        <div className = "flex items-center flex-col justify-center h-screen">
            <div>
                <div className="box-border border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[600px] p-4 shadow dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div>
                        <label htmlFor="1" className="mt-2 block mb-2 text-sm font-helvatica font-bold text-gray-900 dark:text-gray-300">Password Lama</label>
                            <div className= "flex justify-end">
                                <span onClick={handleToggle} className="absolute mt-1 mr-3 justify-end"><Icon icon={icon} size={13}/></span> 
                            </div>
                        <input type={type} id= "1" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required></input>
                    </div>

                    <div className= ""> 
                        <label htmlFor="first_name" className="mt-2 block mb-2 text-sm font-helvatica font-bold text-gray-900 dark:text-gray-300">Password Baru</label>   
                            <div className= "flex justify-end">
                                <span onClick={handleToggle} className="absolute mt-1 mr-3 justify-end"><Icon icon={icon} size={13}/></span> 
                            </div>         
                        <input type= {type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required/>
                        
                    </div>
                    
                    <div>                    
                        <label htmlFor="first_name" className="mt-2 block mb-2 text-sm font-helvatica font-bold text-gray-900 dark:text-gray-300 ">Konfirmasi Password Baru</label>
                            <div className= "flex justify-end">
                                <span onClick={handleToggle} className="absolute mt-1 mr-3 justify-end"><Icon icon={icon} size={13}/></span> 
                            </div>
                        <input type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required></input>
                    </div>
                </div>  

                    <div className="flex justify-end">
                        <button className="mt-5 text-sm bg-indigo-900 hover:bg-indigo-800 text-white font-helvatica py-2 px-4 rounded-lg"> Save Changes </button>
                    </div>
            </div>
                 
        </div>
    )
};

export default ResetPassword;