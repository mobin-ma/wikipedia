import React from 'react'

export default function Content({ content }) {
    return (
        <>
            {
                content && content.map((item) => {
                    return (
                        <>
                            {
                                item.content === "" ? null :
                                    <div className='mt-5'>
                                        <h1 className='border-bottom border-dark pb-3 mb-1 text-danger'>{item.title}</h1>
                                        <p>{item.content}</p>
                                    </div>
                            }
                        </>

                    )
                })
            }
        </>
    )
}
