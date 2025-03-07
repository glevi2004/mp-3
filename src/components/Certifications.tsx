import PageContainer from "./PageContainer";
import PageBox from "./PageBox";
import { Cards, CardInfo } from "./Cards";

const certInfo: CardInfo[] = [
  {
    year: "Jan 2024",
    title: "Version Control",
    description: (
      <>
        <strong>Issued by:</strong> Meta (via Coursera)
      </>
    ),
    items: [
      "🌿 Git and GitHub",
      "🔄 Branching, Merging, and Collaboration",
      "🛠️ Best Practices in Version Control",
    ],
    url: "https://www.coursera.org/",
  },
  {
    year: "Nov 2023",
    title: "JavaScript Mastery",
    description: (
      <>
        <strong>Issued by:</strong> Udemy
      </>
    ),
    items: [
      "⚡ Advanced JavaScript, ES6+, Async Programming",
      "🛠️ React, Node.js, API Integration",
    ],
    url: "https://www.coursera.org/",
  },
  {
    year: "Aug 2023",
    title: "Certified Management Consultant Analyst",
    description: (
      <>
        <strong>Issued by:</strong> Global Innovation Management Institute
      </>
    ),
    items: [
      "🐍 Pandas, NumPy, Matplotlib",
      "📊 Data Analysis and Visualization",
    ],
    url: "https://www.coursera.org/",
  },
];
export default function Certifications() {
  return (
    <>
      <PageContainer>
        <PageBox>
          <h2>Certifications</h2>
          <Cards cards={certInfo} />
        </PageBox>
      </PageContainer>
    </>
  );
}
