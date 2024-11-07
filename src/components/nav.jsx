import React from 'react'

const nav = () => {
    return (
        <>
            <nav className='container'>
                <div className="logo">
                    <img src="/images/brand_logo.png" alt="logo" srcset="" />
                </div>
                <ul>
                    <li>Menu</li>
                    <li>Locatio</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button type="button">Login</button>
            </nav>
        </>
    )
}

export default nav