// import React from 'react'
import { Link } from 'react-router-dom'

const DiscoverComp = () => {
    return (
        <div>
            <div className="rounded-lg shadow inline-block overflow-hidden sm:ml-[1rem]">
                <Link to='/buyelement'>
                    <img src="/images/discover1.jpg" className="rounded-t-lg hover:scale-105 transition duration-500 cursor-pointer object-cover" />
                    <h2 className="font-medium text-md p-3">Luxury villa in Rego Park</h2>
                    <p className="text-orange-600 font-medium px-3 pb-3">$82,000 / mo</p>
                </Link>
            </div>
        </div>
    )
}

export default DiscoverComp