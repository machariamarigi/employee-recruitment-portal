import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
    return (
        <section>
            <div className="h-screen w-screen bg-red-600 flex justify-center content-center flex-wrap">
                <p className="font-sans text-white error-text">
                    404
                </p>
            </div>

            <div className="absolute w-screen bottom-0 mb-6 text-white text-center font-sans text-xl">
                <span className="opacity-50">Take me back <Link to="/">Home</Link></span>
            </div>  
        </section>

    )
}
