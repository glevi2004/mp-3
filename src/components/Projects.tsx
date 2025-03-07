import PageContainer from "./PageContainer";
import PageBox from "./PageBox";
import styled from "styled-components";
import { useState } from "react";
import { Cards, CardInfo } from "./Cards";

const CalculatorBox = styled.div`
  color: #3c3a3a;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Heading = styled.h2`
  font-family: "Press Start 2P";
  text-align: center;
  padding: 10px 0;
`;

const StyledInput = styled.input`
  width: 20vw;
  height: 5vh;
  text-align: center;
  @media (max-width: 750px) {
    width: 30vw;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

const CalcButton = styled.button`
  background-color: white;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  border: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: var(--nav-hover);
    transition: all 0.3s ease-in-out; /* makes transiton smoother */
  }
`;

const ResultBox = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 750px) {
    width: 50vw;
  }
`;

const Result = styled.div<{ isNegative: boolean }>`
  flex-grow: 1;
  height: 5vh;
  background-color: white;
  display: flex;
  margin-left: 1vw;
  justify-content: center;
  align-items: center;
  color: ${({ isNegative }) => (isNegative ? "red" : "black")};
  font-weight: ${({ isNegative }) => (isNegative ? "bold" : "normal")};
`;

const ClearButton = styled.button`
  margin: 1vh;
  width: 20vw;
  height: 5vh;
  background-color: rgb(147, 83, 83);
  color: white;
  border-radius: 10px;
  border: none;
  margin-bottom: 5vh;
  &:hover {
    background: rgb(159, 119, 119);
    transition: all 0.3s ease-in-out; /* makes transiton smoother */
  }
`;

const InputLabel = styled.label`
  margin-bottom: 0.5vh;
  color: #333;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 0;
  width: 20vw;
`;

const projectsInfo: CardInfo[] = [
  {
    year: "2025",
    title: "Online Resume Website",
    description: (
      <>
        <strong>Technologies Used:</strong> JavaScript, HTML, CSS
      </>
    ),
    items: [
      "📜 Built an online resume website displaying my education, certifications, employment, and project experience.",
    ],
  },
  {
    year: "In Development",
    title: "Watch E-commerce Website",
    description: (
      <>
        <strong>Technologies Used:</strong> NextJS, Tailwind CSS
      </>
    ),
    items: [
      "💻 Developed and deployed a full-stack web application for awatch company.",
      "🎨 Designed the UI/UX in Figma and built fully responsive websapp using HTML, CSS, and Tailwind CSS.",
      "📦 Integrated Sanity.io as a headless CMS for custom client support management pages.",
      "⚡ Utilized Next.js for server-side rendering and optimized performance.",
      "📱 Integrated WhatsApp for customer inquiries, tailored as an alternative to a traditional payment system.",
    ],
    url: "https://bpm-watches.vercel.app/",
  },
];

export default function Projects() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  function handleAddition() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 + num2));
  }

  function handleSubtraction() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 - num2));
  }

  function handleDivision() {
    const num1 = Number(input1);
    const num2 = Number(input2);
    setResult(String(num1 / num2));
  }

  function handlePower() {
    let num1 = Number(input1);
    let num2 = Number(input2);

    let result = 1;
    for (let i = 0; i < num2; i++) {
      result = result * num1;
    }
    setResult(String(result));
  }

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  const isNegative = Number(result) < 0;

  return (
    <>
      <PageContainer>
        <PageBox>
          <main>
            <h2>Projects</h2>
            <CalculatorBox>
              <Heading>JavaScript Calculator</Heading>
              <InputWrapper>
                <InputLabel htmlFor="input-1">First Number</InputLabel>
                <StyledInput
                  id="input-1"
                  type="number"
                  placeholder="Enter Input 1"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                />
              </InputWrapper>
              <InputWrapper>
                <InputLabel htmlFor="input-2">Second Number</InputLabel>
                <StyledInput
                  id="input-2"
                  type="number"
                  placeholder="Enter Input 2"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                />
              </InputWrapper>
              <ButtonsBox>
                <CalcButton onClick={handleAddition}>+</CalcButton>
                <CalcButton onClick={handleSubtraction}>-</CalcButton>
                <CalcButton onClick={handleDivision}>/</CalcButton>
                <CalcButton onClick={handlePower}>**</CalcButton>
              </ButtonsBox>
              <ResultBox>
                <h2>Result:</h2>
                <Result id="calc-output" isNegative={isNegative}>
                  {result}
                </Result>
              </ResultBox>
              <ClearButton onClick={handleClear}>Clear</ClearButton>
            </CalculatorBox>
            <Cards cards={projectsInfo} />
          </main>
        </PageBox>
      </PageContainer>
    </>
  );
}
