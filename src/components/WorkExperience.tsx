import PageContainer from "./PageContainer";
import PageBox from "./PageBox";
import { Cards, CardInfo } from "./Cards";

const workExperienceCards: CardInfo[] = [
  {
    year: "Jan 2025 – Present",
    title: "Software Engineer Intern (Web & iOS Development)",
    description: (
      <p>
        <strong>Company:</strong> Esurgi Inc. | Remote
      </p>
    ),
    items: [
      "💻 Assisting in the development of a web and iOS app using JavaScript, React, Next.js, HTML, and CSS.",
      "📱 Supporting iOS development with Swift & SwiftUI alongside the team.",
      "🔥 Helping integrate Firebase for real-time database management and authentication.",
    ],
  },
  {
    year: "May 2024 - Aug 2024",
    title: "FASTECH: Software Engineer Intern",
    description: (
      <p>
        <strong>Company:</strong> Ernst & Young | São Paulo, Brazil
      </p>
    ),
    items: [
      "✅ Implemented CRM & ERP solutions using JavaScript & ElasticSearch.",
      "🔍 Retrieved, tested, and validated JSON data from RESTful APIs using Postman.",
      "⚙️ Automated accounting workflows with Python (NumPy, pandas, Matplotlib, openpyxl, requests).",
      "📊 Processed JSON data into Excel for reporting & deployed solutions with Docker.",
      "📈 Supported a financial platform for IPO readiness, handling financial statements & balance sheets.",
    ],
  },
  {
    year: "Oct 2023 – Nov 2023",
    title: "Management Consultant Intern",
    description: (
      <p>
        <strong>Company:</strong> IXL Center | Boston, MA
      </p>
    ),
    items: [
      "🚀 Led digital growth initiatives for a minority-owned business, mentored by expert consultants.",
      "💰 Reached over $3,000 in funding and contributed to a 2x expansion in scale.",
      "🏆 Won 'Best Technology' award for creating a multilingual digital literacy course (English, Spanish, Portuguese) & trained the owner for sustainable growth.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <>
      <PageContainer>
        <PageBox>
          <main>
            <h2>Employment</h2>
            <Cards cards={workExperienceCards} />
          </main>
        </PageBox>
      </PageContainer>
    </>
  );
}
