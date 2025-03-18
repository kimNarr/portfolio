import React from "react";

function About({ aboutRef }) {
  return (
    <section className="about" ref={aboutRef}>
      <h2 className="section_title">
        <span>A</span>bout Me
      </h2>
      <div className="content">
        <h3>design - publish - develop</h3>
        <p>
          저는 다양한 프로젝트를 통해 웹 퍼블리셔로서의 경험을 쌓았습니다. 특히,
          최신 웹 트렌드에 맞춘 반응형 웹 디자인, 사용자 친화적인 인터페이스
          설계, 그리고 웹 접근성을 고려한 프로젝트에 많은 시간을 투자했습니다.
          또한, 개발 팀과의 원활한 소통을 통해 기획과 디자인이 잘 반영된 완성도
          높은 결과물을 도출해왔습니다.
        </p>
        <p>
          앞으로도 더욱 효율적이고, 사용자 중심의 웹 환경을 만드는 것을 목표로,
          새로운 기술을 지속적으로 학습하고 실무에 적용할 것입니다. 웹
          퍼블리셔로서 또 프론트 개발자로서 계속 성장하는 모습을
          보여드리겠습니다.
        </p>
      </div>
    </section>
  );
}

export default About;
