'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Heart, AlertCircle, CheckCircle2, FileType } from 'lucide-react';

export default function ReportPage() {
  const router = useRouter();

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
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#fff3f2] text-[#f39292] mb-4">
              <Heart size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">BeforeYes 감정 리포트</h2>
            <h3 className="text-xl font-medium text-[#f39292] mb-4">감정 미완성형</h3>
          </div>

          {/* 퍼센트지 */}
          <div className="space-y-4 mb-10">
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

          {/* 감정 분석 내용 */}
          <div className="space-y-6 text-sm leading-relaxed text-[#5c4f4f]">
            <div>
              <h4 className="font-bold mb-2">1. 현재 감정 상태 요약</h4>
              <p>당신은 현재 결혼을 앞두고 있지만, 감정의 방향이 명확하지 않은 상태입니다. 기대와 설렘보다는 막연한 불안이 먼저 떠오르며, 감정의 흐름이 명확하게 구조화되지 않은 채 복잡하게 얽혀 있습니다.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">2. 감정 구조 분석</h4>
              <p>감정 키워드는 ‘불안’, ‘혼란’, ‘망설임’입니다. 이 감정들이 선명하지 않은 채 반복적으로 순환되고 있습니다.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">3. 불안을 일으키는 주요 요인</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>상대방과의 대화 중 갈등을 피하려는 경향</li>
                <li>감정 표현의 회피</li>
                <li>현실적 주제에 대한 토론 부족</li>
                <li>결혼 자체에 대한 사회적 압박과 주변의 기대</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">4. 감정의 흐름 타임라인</h4>
              <p>시작: 결혼 이야기가 구체화되며 약한 불안 발생<br />
              진행: 웨딩 준비로 감정의 혼란 증가<br />
              현재: 확신보다는 혼란이 지배적</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">5. 대화 패턴 분석</h4>
              <p>감정적 고민을 충분히 공유하지 못하는 경향이 있으며, 이는 감정 누적과 소외감으로 이어질 수 있습니다.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">6. 현재 관계 만족도</h4>
              <p>기본적인 신뢰는 있으나 미래에 대한 감정적 그림이 미완성 상태입니다.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">7. 불안 패턴 진단 및 조언</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>막연한 상황에 대한 불안에서 기인</li>
                <li>감정 기록 및 시각화로 구체화 필요</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">8. 안정감을 위한 대화 가이드</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>“요즘 나는 우리 결혼에 대해 이런저런 생각을 많이 하고 있어.”</li>
                <li>“불안한 이유가 명확하진 않지만, 너랑 얘기하면 정리가 될 것 같아.”</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">9. 향후 추천 액션 플랜</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>AI 저널링 기능으로 감정 일기 작성</li>
                <li>결혼 시뮬레이션 기능 활용</li>
                <li>가치관 정리 워크시트 병행</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">10. 결론 및 제안</h4>
              <p>감정을 무시한 채 결정하지 않도록, BeforeYes는 감정 점검을 돕습니다.</p>
            </div>
          </div>
        </div>
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
        <div 
          className="h-full bg-gradient-to-r from-[#f4a3a3] to-[#F7BFBF] rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <p className="text-sm text-[#84757a]">{desc}</p>
    </div>
  );
}