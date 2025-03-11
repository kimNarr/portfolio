import React from 'react'

function Project() {
    return (
        <section className='project'>
            <h2 className='section_title'><span>S</span>tudy Project</h2>
            <article>
                <div className='project_name'>
                    <h3>clone coding</h3>
                    <p>2024.11.25 ~ 2024.12.19</p>
                </div>
                <div className='project_img'>
                    <figure>
                        <img src="./img/project/img01.png" alt="project1" />
                    </figure>
                </div>
                <div className='project_text'>
                    <div className='group'>
                        <h3>SK True Innovation Clone Coding<br />
                        / 최대한 원본 사이트와 일치 하는것을 목표로 제작</h3>
                        <p>#반응형, #html, #css, #javascript, #swiper, #gsap</p>
                    </div>
                    <div className='group'>
                        <a href="#">view</a>
                        <a href="#">github</a>
                    </div>


                </div>
            </article>
        </section>
    )
}

export default Project