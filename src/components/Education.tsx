import PageContainer from "./PageContainer";
import PageBox from "./PageBox";
import { Cards, CardInfo } from "./Cards";

const educationInfo: CardInfo[] = [
  {
    year: "2022 - Present",
    title: "Boston University",
    description: (
      <>
        <strong>B.A. in Computer Science</strong>, Minor in Business
        Administration
      </>
    ),
    items: [
      "📚 Relevant Coursework: Algorithms, Data Structures, Databases, Web Development",
      "🌟 Activities: Sigma Chi Fraternity, BUBA (Boston University Brazilian Association)",
    ],
  },
  {
    year: "2019 - 2022",
    title: "Cats Academy Boston",
    description: "Completed High School",
    items: [
      "📚 Relevant Coursework: Algorithms, Data Structures, Databases, Web Development",
    ],
  },
  {
    year: "2016 - 2019",
    title: "Bom Jesus Centro",
    description: "High School Studies before transferring",
    items: [],
  },
  {
    year: "2006 - 2016",
    title: "Bom Jesus Centro",
    description: "Elementary School",
    items: [],
  },
];

export default function Education() {
  return (
    <PageContainer>
      <PageBox>
        <main>
          <h2>Education</h2>
          <Cards cards={educationInfo} />
        </main>
      </PageBox>
    </PageContainer>
  );
}
