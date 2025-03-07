import PageContainer from "./PageContainer";
import PageBox from "./PageBox";

export default function About() {
  return (
    <>
      <PageContainer>
        <PageBox>
          <main>
            <h1>About Me</h1>
            <p>Learn more about my background, interests, and experiences.</p>
            {/* Introduction */}
            <section>
              <h2>Introduction</h2>
              <p>
                Hi, I'm <strong>Gabriel Levi Ramos</strong>, a junior at
                <strong>Boston University</strong>, majoring in
                <strong>Computer Science</strong> with a minor in
                <strong>Business Administration</strong>. I'm passionate about
                <strong>Web App and iOS development</strong>, always seeking new
                challenges and opportunities to grow as a student and
                professional.
              </p>
            </section>

            {/* Background */}
            <section>
              <h2>Background</h2>
              <p>
                I am a dual citizen — born in the United States 🇺🇸 but
                naturalized in Brazil 🇧🇷. I grew up in Curitiba, Paraná, where I
                attended Bom Jesus Aldeia for elementary school and later
                studied at Bom Jesus Centro for high school. Halfway through
                high school, I had the opportunity to transfer to CATS Academy
                Boston, where I completed my studies. Now, I’m pursuing a degree
                in Computer Science at Boston University, with a minor in
                Business Administration.
              </p>
            </section>

            <section>
              <h2>Interests and Activities</h2>
              <ul>
                <li>
                  🏛️ <strong>Brother of Sigma Chi Fraternity</strong> – Building
                  leadership and community connections.
                </li>
                <li>
                  🇧🇷 <strong>Boston University Brazilian Club</strong> – Served
                  as
                  <em>Events Coordinator</em> during my freshman and sophomore
                  years.
                </li>
                <li>
                  🛹 <strong>Skateboarding</strong> – A passion since childhood.
                </li>
                <li>
                  🏀 <strong>Basketball</strong> – Played varsity in Brazil and
                  junior varsity at CATS Academy Boston.
                </li>
                <li>
                  💪 <strong>Going to the Gym</strong> – Regularly train to stay
                  active and maintain a healthy lifestyle.
                </li>
              </ul>
            </section>
          </main>
        </PageBox>
      </PageContainer>
    </>
  );
}
