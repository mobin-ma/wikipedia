import React from 'react'

export default function Sumary({ summary }) {
    return (
        <>
            <div className="description">
                <h1 className='border-bottom border-dark pb-3 mb-1 text-danger'>Description</h1>
                <p>{summary}</p>
            </div>
            
        </>

    )
}
