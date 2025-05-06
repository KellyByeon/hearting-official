'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Heart, AlertCircle, CheckCircle2, FileType } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TestPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // 테스트 질문 데이터
  const questions = [
    {
      id: 1,
      question: "파트너와 함께 있을 때 어떤 감정을 가장 많이 느끼시나요?",
      options: [
        { value: "a", text: "편안함과 안정감" },
        { value: "b", text: "설렘과 흥분" },
        { value: "c", text: "불안함과 걱정" },
        { value: "d", text: "의무감과 책임감" },
        { value: "e", text: "혼란스러움" }
      ]
    },
    {
      id: 2,
      question: "결혼을 생각할 때 가장 큰 고민거리는 무엇인가요?",
      options: [
        { value: "a", text: "재정적인 문제" },
        { value: "b", text: "가치관 차이" },
        { value: "c", text: "미래에 대한 불확실성" },
        { value: "d", text: "가족 관계" },
        { value: "e", text: "자유/독립성 상실" }
      ]
    },
    {
      id: 3,
      question: "파트너와의 갈등이 생겼을 때 주로 어떻게 대응하시나요?",
      options: [
        { value: "a", text: "대화로 즉시 해결하려 노력한다" },
        { value: "b", text: "일단 피하고 나중에 이야기한다" },
        { value: "c", text: "감정적으로 대응하는 편이다" },
        { value: "d", text: "내 잘못이 아니더라도 먼저 사과한다" },
        { value: "e", text: "마음에 쌓아두고 표현하지 않는다" }
      ]
    },
    {
      id: 4,
      question: "파트너와 미래 계획(자녀, 거주지 등)에 대해 충분히 이야기 나눴나요?",
      options: [
        { value: "a", text: "매우 자세히 논의했다" },
        { value: "b", text: "대략적으로만 이야기했다" },
        { value: "c", text: "거의 이야기하지 않았다" },
        { value: "d", text: "이야기했지만 의견 차이가 있다" },
        { value: "e", text: "아직 그런 이야기를 하기엔 이르다고 생각한다" }
      ]
    },
    {
      id: 5,
      question: "파트너의 단점이나 불만족스러운 부분을 어떻게 생각하시나요?",
      options: [
        { value: "a", text: "수용 가능하며 큰 문제가 되지 않는다" },
        { value: "b", text: "결혼 후 개선될 것이라 기대한다" },
        { value: "c", text: "걱정되지만 타협할 수 있다" },
        { value: "d", text: "심각한 갈등 요소가 될 것 같다" },
        { value: "e", text: "확신이 서지 않아 고민이 된다" }
      ]
    },
    {
      id: 6,
      question: "결혼을 결정하는 데 있어 외부 요소(나이, 주변 압박 등)가 영향을 미치나요?",
      options: [
        { value: "a", text: "전혀 영향 없이 순수하게 관계만 고려한다" },
        { value: "b", text: "약간의 영향이 있지만 주로 관계에 집중한다" },
        { value: "c", text: "외부 요소가 상당한 영향을 미친다" },
        { value: "d", text: "외부 요소가 결정적인 이유다" },
        { value: "e", text: "잘 모르겠다" }
      ]
    }
  ];

  // 다음 단계로 이동
  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      // 테스트 결과 계산 시뮬레이션
      setTimeout(() => {
        setLoading(false);
        setShowResults(true);
      }, 1500);
    }
  };

  // 이전 단계로 이동
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // 답변 선택 처리
  const handleAnswer = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  // 현재 질문에 답변했는지 확인
  const isCurrentQuestionAnswered = () => {
    return answers[questions[currentStep].id] !== undefined;
  };

  // 진행률 계산
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-[#FFF9F6] text-[#5c4f4f] min-h-screen font-['Pretendard','Noto Sans KR',sans-serif]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
            <img src="/BeforeYes.png" alt="BeforeYes Logo" className="h-10" />
          </div>
        </div>
      </header>

      <div className="max-w-screen-md mx-auto px-4 py-12">
        {!showResults ? (
          <>
            {/* 테스트 진행 UI */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-3">결혼 확신 테스트</h1>
              <p className="text-[#84757a]">
                결혼 전 감정을 정리하는 첫 단계입니다. 
                <br/>솔직하게 답변해주세요.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-[#84757a] mb-1">
                <span>질문 {currentStep + 1}/{questions.length}</span>
                <span>{Math.round(progress)}% 완료</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-[#f4a3a3] to-[#F7BFBF] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* 현재 질문 */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-medium mb-6">{questions[currentStep].question}</h2>
              <div className="space-y-3">
                {questions[currentStep].options.map((option) => (
                  <div 
                    key={option.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      answers[questions[currentStep].id] === option.value 
                        ? 'border-[#f4a3a3] bg-[#fff3f2]' 
                        : 'border-gray-200 hover:border-[#f4a3a3] hover:bg-[#fff9f8]'
                    }`}
                    onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            </div>

            {/* 네비게이션 버튼 */}
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-1 px-4 py-2 rounded-full ${
                  currentStep === 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-[#5c4f4f] hover:bg-[#fff3f2]'
                }`}
              >
                <ChevronLeft size={16} />
                이전
              </button>
              <button
                onClick={nextStep}
                disabled={!isCurrentQuestionAnswered()}
                className={`flex items-center gap-1 px-6 py-2 rounded-full ${
                  isCurrentQuestionAnswered()
                    ? 'bg-[#f4a3a3] text-white hover:bg-[#f39292]' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentStep < questions.length - 1 ? '다음' : '결과 보기'}
                <ChevronRight size={16} />
              </button>
            </div>
          </>
        ) : loading ? (
          // 로딩 UI
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#f4a3a3] border-t-transparent mb-4"></div>
            <p className="text-lg">당신의 감정을 분석하고 있습니다...</p>
          </div>
        ) : (
          // 결과 UI
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#fff3f2] text-[#f39292] mb-4">
                <Heart size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-2">당신의 결혼 확신 유형</h2>
              <h3 className="text-xl font-medium text-[#f39292] mb-4">신중한 탐색가</h3>
              <p className="text-[#84757a]">
                결혼에 대한 진지한 고민과 분석적인 접근이 특징입니다.
                <br/>더 자세한 분석과 맞춤형 가이드가 필요합니다.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <ResultItem 
                icon={<CheckCircle2 size={20} />} 
                title="관계 만족도" 
                value={68} 
                desc="기본적인 만족감이 있지만 일부 불안 요소가 있습니다." 
              />
              <ResultItem 
                icon={<AlertCircle size={20} />} 
                title="불안 요소" 
                value={42} 
                desc="미래에 대한 불확실성과 가치관 차이에 대한 고민이 있습니다." 
              />
              <ResultItem 
                icon={<FileType size={20} />} 
                title="의사소통 패턴" 
                value={75} 
                desc="대체로 건강한 의사소통을 하고 있으나 갈등 상황에서의 대처에 개선이 필요합니다." 
              />
            </div>

            <div className="bg-[#fff3f2] border border-[#f4a3a3] rounded-lg p-4 mb-6">
              <p className="text-sm">
                <strong>주의:</strong> 이 결과는 기본적인 분석만을 제공합니다. 
                더 깊이 있는 인사이트와 구체적인 가이드를 원하신다면 전체 감정 리포트를 확인하세요.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <button 
                className="w-full px-6 py-3 bg-[#f4a3a3] text-white rounded-full shadow-md hover:bg-[#f39292] transition"
                onClick={() => router.push('/#pricing')}
              >
                전체 감정 리포트 받기 (₩14,900)
              </button>
              <button 
                className="w-full px-6 py-3 border-2 border-[#F7BFBF] text-[#f39292] rounded-full hover:bg-[#fff3f2] transition"
                onClick={() => router.push('/#pricing')}
              >
                감정 리포트 미리보기 (₩3,900)
              </button>
              <button 
                className="text-[#84757a] hover:text-[#5c4f4f] py-2"
                onClick={() => router.push('/')}
              >
                홈으로 돌아가기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 결과 항목 컴포넌트
function ResultItem({ icon, title, value, desc }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-[#5c4f4f]">
          <div className="text-[#f4a3a3]">{icon}</div>
          <div className="font-medium">{title}</div>
        </div>
        <div className="font-bold">{value}%</div>
      </div>
      <div className="h-2 bg-gray-200 rounded-full mb-2">
        <div 
          className="h-full bg-gradient-to-r from-[#f4a3a3] to-[#F7BFBF] rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <p className="text-sm text-[#84757a]">{desc}</p>
    </div>
  );
}