// 이 파일은 app/test/page.jsx 위치에 들어갑니다.
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

  const questions = [
    { id: 1, question: '연인과 함께 있을 때 가장 많이 드는 감정은?', options: ['편안함', '설렘', '불안', '의무감', '혼란'] },
    { id: 2, question: '결혼을 생각할 때 가장 큰 고민은?', options: ['재정', '가치관', '불확실성', '가족', '독립성'] },
    { id: 3, question: '갈등이 생겼을 때 나의 대응은?', options: ['대화', '회피', '감정 폭발', '사과', '침묵'] },
    { id: 4, question: '미래 계획에 대한 대화 정도는?', options: ['충분함', '대략적', '부족함', '의견 차이', '미논의'] },
    { id: 5, question: '파트너의 단점에 대한 나의 태도는?', options: ['수용', '기대', '타협', '갈등', '확신 부족'] },
    { id: 6, question: '외부 요인이 결혼 결정에 미치는 영향은?', options: ['무영향', '약간', '상당', '결정적', '불확실'] },
    { id: 7, question: '의사소통 방식은?', options: ['직설', '회피', '배려', '감정적', '무반응'] },
    { id: 8, question: '결혼 후 관계에 대한 기대는?', options: ['안정', '성장', '도전', '변화', '불안정'] },
    { id: 9, question: '감정 표현 방식은?', options: ['개방', '조심', '과잉', '억제', '무관심'] },
    { id: 10, question: '감정 읽기 능력은?', options: ['탁월', '좋음', '보통', '미흡', '둔감'] },
    { id: 11, question: '혼자 있을 때 드는 감정은?', options: ['평온', '외로움', '자유', '불안', '공허'] },
    { id: 12, question: '사랑의 형태는?', options: ['애정', '열정', '의리', '의무', '습관'] },
    { id: 13, question: '결혼 생활에서 중요한 가치는?', options: ['신뢰', '소통', '안정', '책임', '자유'] },
    { id: 14, question: '상대방에 대한 신뢰는?', options: ['절대적', '높음', '보통', '낮음', '불신'] },
    { id: 15, question: '문제 상황에서의 대처는?', options: ['논리', '감정', '피드백', '방어', '무시'] },
    { id: 16, question: '결혼 준비 정도는?', options: ['충분', '대체로', '부족', '불안', '미정'] },
    { id: 17, question: '감정적 거리감은?', options: ['밀착', '가까움', '적당', '멀어짐', '소외'] },
    { id: 18, question: '결혼 후 예상되는 변화는?', options: ['긍정', '약간', '혼합', '부담', '부정'] },
    { id: 19, question: '나의 희생에 대한 인식은?', options: ['기꺼이', '괜찮음', '갈등', '억울함', '회피'] },
    { id: 20, question: '상대의 변화에 대한 기대는?', options: ['확신', '희망', '불안', '체념', '무관심'] },
    { id: 21, question: '리포트를 통해 얻고 싶은 것은?', options: ['통찰', '해결', '확인', '위로', '모름'] },
    { id: 22, question: '관계 유지에 대한 확신은?', options: ['확신', '희망', '고민', '불안', '무확신'] },
    { id: 23, question: '결혼에 대한 감정은?', options: ['설렘', '안정', '고민', '의무', '회의'] },
    { id: 24, question: '관계를 한 단어로 표현하면?', options: ['사랑', '신뢰', '의문', '긴장', '미완성'] },
  ].map((q) => ({ ...q, options: q.options.map((t, i) => ({ value: String.fromCharCode(97 + i), text: t })) }));

  const nextStep = () => {
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
    else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  const handleAnswer = (id, value) => setAnswers({ ...answers, [id]: value });

  const isCurrentQuestionAnswered = () => answers[questions[currentStep].id] !== undefined;

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="bg-[#FFF9F6] text-[#5c4f4f] min-h-screen font-['Pretendard','Noto Sans KR',sans-serif]">
      <header className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}> <img src="/BeforeYes.png" alt="Logo" className="h-10" /> </div>
        </div>
      </header>

      <div className="max-w-screen-md mx-auto px-4 py-12">
        {!showResults ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-3">BeforeYes 무료 테스트</h1>
              <p className="text-[#84757a]">총 24개의 문항에 응답해주세요.</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between text-sm text-[#84757a] mb-1">
                <span>질문 {currentStep + 1}/{questions.length}</span>
                <span>{Math.round(progress)}% 완료</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-gradient-to-r from-[#f4a3a3] to-[#F7BFBF] rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-medium mb-6">{questions[currentStep].question}</h2>
              <div className="space-y-3">
                {questions[currentStep].options.map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      answers[questions[currentStep].id] === option.value ? 'border-[#f4a3a3] bg-[#fff3f2]' : 'border-gray-200 hover:border-[#f4a3a3] hover:bg-[#fff9f8]'
                    }`}
                    onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={prevStep} disabled={currentStep === 0} className={`flex items-center gap-1 px-4 py-2 rounded-full ${currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-[#5c4f4f] hover:bg-[#fff3f2]'}`}>
                <ChevronLeft size={16} /> 이전
              </button>
              <button onClick={nextStep} disabled={!isCurrentQuestionAnswered()} className={`flex items-center gap-1 px-6 py-2 rounded-full ${isCurrentQuestionAnswered() ? 'bg-[#f4a3a3] text-white hover:bg-[#f39292]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}>
                {currentStep < questions.length - 1 ? '다음' : '결과 보기'} <ChevronRight size={16} />
              </button>
            </div>
          </>
        ) : loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#f4a3a3] border-t-transparent mb-4"></div>
            <p className="text-lg">감정을 분석 중입니다...</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#fff3f2] text-[#f39292] mb-4"> <Heart size={32} /> </div>
              <h2 className="text-2xl font-bold mb-2">당신의 결혼 확신 유형</h2>
              <h3 className="text-xl font-medium text-[#f39292] mb-4">신중한 탐색가</h3>
              <p className="text-[#84757a]">결혼에 대한 분석적 태도가 강하며, 추가적인 인사이트가 필요합니다.</p>
            </div>

            <div className="space-y-4 mb-8">
              <ResultItem icon={<CheckCircle2 size={20} />} title="관계 만족도" value={68} desc="기본적인 만족감이 있지만 일부 불안 요소가 있습니다." />
              <ResultItem icon={<AlertCircle size={20} />} title="불안 요소" value={42} desc="불확실성과 가치관 차이에 대한 고민이 있습니다." />
              <ResultItem icon={<FileType size={20} />} title="의사소통 패턴" value={75} desc="대체로 건강한 의사소통을 하고 있으나 갈등 상황에서는 개선이 필요합니다." />
            </div>

            <div className="flex flex-col space-y-3">
              <button className="w-full px-6 py-3 bg-[#f4a3a3] text-white rounded-full shadow-md hover:bg-[#f39292] transition" onClick={() => router.push('/#pricing')}>전체 감정 리포트 받기 (₩14,900)</button>
              <button className="w-full px-6 py-3 border-2 border-[#F7BFBF] text-[#f39292] rounded-full hover:bg-[#fff3f2] transition" onClick={() => router.push('/#pricing')}>감정 리포트 미리보기 (₩3,900)</button>
              <button className="text-[#84757a] hover:text-[#5c4f4f] py-2" onClick={() => router.push('/')}>홈으로 돌아가기</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

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
        <div className="h-full bg-gradient-to-r from-[#f4a3a3] to-[#F7BFBF] rounded-full" style={{ width: `${value}%` }}></div>
      </div>
      <p className="text-sm text-[#84757a]">{desc}</p>
    </div>
  );
}