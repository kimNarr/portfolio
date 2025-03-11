import React from 'react'

function Main() {
    return (
        <main className='main'>
            <div className='content'>
                <h1>portfolio & career description</h1>
                <div className='scroll'>
                    <span className='dot'></span>
                </div>
            </div>
            <div className='bg'>
                <div className='inner'>
                    <video muted autoPlay loop>
                        <source src='./img/main/bg.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
        </main>
    )
}

export default Main