import styled from "styled-components";
import portrait from "../assets/portrait.jpeg";
import PageContainer from "./PageContainer";
import PageBox from "./PageBox";

export default function Home() {
  const ImageBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2vw;
  `;

  const Image = styled.img`
    width: 35vh;
    height: 35vh;
    border-radius: 50%; /* Makes img circular (its border radius will be half of width and height respectively) */
    object-fit: cover; /* Ensure img fills circular shape, and does not get distorted */
    margin-right: 1vw;
  `;
  return (
    <>
      <PageContainer>
        <PageBox>
          <main>
            <ImageBox>
              <Image
                src={portrait}
                alt="Image of Gabriel Levi Ramos"
                id="img-of-myself"
              />
              <div id="text-container">
                <h1>Computer Science Student</h1>
                <h2>WebApp & iOS developer</h2>
              </div>
            </ImageBox>

            <p>
              Hi, I'm <strong>Gabriel Levi Ramos</strong>, a junior at
              <strong> Boston University</strong> studying
              <strong> Computer Science</strong> with a minor in
              <strong> Business Administration</strong>.
            </p>
            <p>
              I am passionate about <strong>web applications</strong> and
              <strong> iOS development</strong>, constantly exploring new
              technologies to build <strong> intuitive</strong> and
              <strong> impactful digital experiences</strong>.
            </p>
            <p>
              Previously, I worked as a
              <strong>Software Engineering Intern</strong> at
              <strong> Ernst &amp; Young</strong>, where I gained experience in
              <strong> web development</strong>, <strong> automation</strong>,
              and
              <strong> ERP/CRM systems</strong>.
            </p>
            <p>
              Currently, I am a
              <strong> WebApp & iOS Software Engineer Intern</strong> at
              <strong> Esurgi Inc</strong>, contributing to the development of
              <strong> innovative healthcare solutions</strong>.
            </p>
            <p>
              I am always eager to take on <strong>new challenges</strong> and
              collaborate on <strong>exciting projects</strong>. Feel free to
              explore my work and reach out! 🚀
            </p>
          </main>
        </PageBox>
      </PageContainer>
    </>
  );
}
