import React, { useState, useEffect } from 'react';
import SuccessIcon from '@src/components/Icon/SuccessIcon';
import ClearIcon from "../Icon/ClearIcon";
import WarningIcon from '../Icon/WarningIcon';
import InfoIcon from "../Icon/InfoIcon";
import clsx from 'clsx';

interface ToastProperties {
    type: string;
    label: string;
    position: string;
    timer: number;
}

const Types: Record<string, { primaryIcon: JSX.Element, clearIcon: JSX.Element, className: string }> = {
    success: {
        primaryIcon: <SuccessIcon className="h-6 w-6 sm:h-9 sm:w-9"/>,
        clearIcon: <ClearIcon fill="#3FB160"/>,
        className: 'border-[#3FB160] hover:bg-[#EAF7EE]'
    },
    warning: {
        primaryIcon: <WarningIcon fill="#DF9800" className="h-6 w-6 sm:h-9 sm:w-9"/>,
        clearIcon: <ClearIcon fill="#DF9800"/>,
        className: 'border-[#DF9800] hover:bg-[#FEF7EA]'
    },
    danger: {
        primaryIcon: <WarningIcon fill="#EB4C2B" className="h-6 w-6 sm:h-9 sm:w-9"/>,
        clearIcon: <ClearIcon fill="#EB4C2B"/>,
        className: 'border-[#EB4C2B] hover:bg-[#FCEDE9]'
    },
    info: {
        primaryIcon: <InfoIcon fill="#046EE7" className="h-6 w-6 sm:h-9 sm:w-9"/>,
        clearIcon: <ClearIcon fill="#046EE7"/>,
        className: 'border-[#046EE7] hover:bg-[#E6F0F8]'
    },
}

const Positions: Record<string, {className: string}> = {
    bottom: {
        className: 'bottom-10 animate-toastSlideUp'
    },
    top: {
        className: 'top-10 animate-toastSlideDown'
    },
    left: {
        className: 'left-10 animate-toastSlideRight'
    },
    right: {
        className: 'right-10 animate-toastSlideLeft'
    }
}

const Toast: React.FC<ToastProperties> = (props) => {
    const [showToast, setShowToast] = useState(true)
    const {timer, label, type, position} = props

    useEffect(() => {
        setTimeout(closeToast, timer)
    }, [showToast])

    const closeToast = () => {
        setShowToast(false)
    }

    return (
        <>
            {showToast && 
                <div className={clsx('flex flex-row items-center p-3 gap-4 max-h-14 max-w-xs sm:max-h-16 sm:max-w-sm bg-gray-200 border border-solid rounded-lg fixed', 
                                    Types[type].className, 
                                    Positions[position].className
                                )}>
                <div>
                    {Types[type].primaryIcon}
                </div>
                <div className="font-helvatica leading-[1.125]">
                    {label}
                </div>
                <div className="flex h-5 w-5 sm:h-6 sm:w-6 hover:cursor-pointer" onClick={closeToast}>
                    {Types[type].clearIcon}
                </div>
            </div>}
        </>
    );
};

export default Toast;