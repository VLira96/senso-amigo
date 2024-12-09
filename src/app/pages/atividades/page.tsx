"use client";

import SideBar from "@/components/sidebar";
import { useState } from "react";

const Atividades = () => {
  const questions = [
    { question: "10 + 10 = ?", correctAnswer: 20 },
    { question: "25 - 5 = ?", correctAnswer: 20 },
    { question: "5 x 4 = ?", correctAnswer: 20 },
    { question: "40 ÷ 2 = ?", correctAnswer: 20 },
    { question: "15 + 5 = ?", correctAnswer: 20 },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (parseInt(userAnswer) === correctAnswer) {
      setFeedback("✅ Parabéns! Você acertou.");
      setScore(score + 1);
    } else {
      setFeedback("❌ Ops! Resposta errada. Tente novamente.");
    }
    setUserAnswer(""); // Limpar o campo de resposta
  };

  const handleNextQuestion = () => {
    setFeedback("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <main className="flex-grow relative bg-gray-100 h-full">
      <div className="p-4 flex flex-col items-center">
        {/* Título Principal */}
        <h1 className="text-5xl font-bold text-azul-secundario mb-16">Atividades</h1>

        {/* Seção de Questões */}
        <div className="mb-16 w-full">
          <h2 className="text-3xl font-semibold text-azul-secundario mb-8 text-center">
            Atividades de Matemática
          </h2>

          <div className="flex flex-col items-center">
            <div className="bg-azul-claro text-black p-4 rounded-lg w-96 text-center shadow-md">
              <p className="text-lg font-medium mb-4">
                {questions[currentQuestion].question}
              </p>

              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                  placeholder="Digite sua resposta"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-azul-secundario text-white p-2 rounded-lg"
                >
                  Enviar Resposta
                </button>
              </form>

              {feedback && <p className="mt-4 text-lg font-medium">{feedback}</p>}

              {feedback && currentQuestion < questions.length - 1 && (
                <button
                  onClick={handleNextQuestion}
                  className="mt-4 w-full bg-azul-secundario text-white p-2 rounded-lg"
                >
                  Próxima Questão
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Finalização */}
        {currentQuestion === questions.length - 1 && feedback.includes("✅") && (
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-semibold text-azul-secundario">
              🏆 Parabéns! Você concluiu as atividades!
            </h2>
            <p className="text-lg mt-4">Pontuação final: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Atividades;
