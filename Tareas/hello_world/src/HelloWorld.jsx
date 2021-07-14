import React from 'react'
import MyFriend from './MyFriend'

const HelloWorld = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <p>Hello {/*world*/} <MyFriend />!</p> 
                </div>
            </div>
        </div>
    )
}

export default HelloWorld