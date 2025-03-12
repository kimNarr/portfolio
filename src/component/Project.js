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
                    <div className='text_group'>
                        <h3>SK True Innovation Clone Coding</h3>
                        <p>#반응형, #html, #css, #javascript, #swiper, #gsap</p>
                    </div>
                    <div className='btn_group'>
                        <a href="https://kimnarr.github.io/cloneSite/" target='_blank' className='btn btn_red'>view</a>
                        <a href="https://github.com/kimNarr/cloneSite" target='_blank' className='btn btn_normal'>github</a>
                    </div>
                </div>
            </article>
            <article>
                <div className='project_name'>
                    <h3>react app</h3>
                    <p>2025.02.10 ~ 2025.02.27</p>
                </div>
                <div className='project_img'>
                    <figure>
                        <img src="./img/project/img02.png" alt="project2" />
                    </figure>
                </div>
                <div className='project_text'>
                    <div className='text_group'>
                        <h3>OPEN API를 활용한 날씨, 뉴스 리액트 앱 제작</h3>
                        <p>#반응형, #html, #css, #javascript, #swiper, #gsap</p>
                    </div>
                    <div className='btn_group'>
                        <a href="https://visionary-panda-45ba8e.netlify.app/" target='_blank' className='btn btn_red'>view</a>
                        <a href="https://github.com/kimNarr/weather_app" target='_blank' className='btn btn_normal'>github</a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Project