import React from 'react'

function Contact() {
    return (
        <section className='contact'>
            <div className='inner'>
                <h1>kim dongjin</h1>
                <p>ignitionhero@gmail.com</p>
                <a href="https://github.com/kimNarr" target='_blank'>
                    <img src="./img/contact/github.svg" alt="github" />
                </a>
            </div>
            <div className='copyright'>©2025 Kim Dongjin All Right Reserved</div>
            <div className='bg'>
                <div className='inner'>
                    <video muted autoPlay loop>
                        <source src='./img/main/bg.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Contact