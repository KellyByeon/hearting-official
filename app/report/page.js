'use client';

import React from 'react';

export default function ReportPage() {
  return (
    <div className="bg-[#FFF9F6] min-h-screen py-20 px-6 text-[#5c4f4f] font-['Pretendard','Noto Sans KR',sans-serif]">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">BeforeYes 감정 리포트: 감정 미완성형</h1>

        {/* 빈 결과 창 */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-2">🔍 감정 결과 요약</h2>
          <p className="text-[#84757a]">여기에 결과 요약이 표시됩니다. (예: 감정 미완성형, 감정 구조 점수, 핵심 키워드 등)</p>
        </section>

        {/* 감정 타임라인 영역 */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-2">📊 감정 흐름 타임라인</h2>
          <p className="text-[#84757a]">그래프 및 설명 영역 - 추후 시각화 컴포넌트 연결 예정</p>
        </section>

        {/* 감정 분석 요약 테이블 */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold mb-4">📌 감정 불안 주요 요인 요약</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-[#f4a3a3]">
              <thead className="bg-[#fceeee] text-[#f39292]">
                <tr>
                  <th className="p-2">카테고리</th>
                  <th className="p-2">내용 요약</th>
                  <th className="p-2">우선 순위</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">감정 표현</td>
                  <td className="p-2">상대와의 감정 교류 부족</td>
                  <td className="p-2">높음</td>
                </tr>
                <tr className="bg-[#fff8f8]">
                  <td className="p-2">대화 방식</td>
                  <td className="p-2">회피 혹은 일방적 주장</td>
                  <td className="p-2">중간</td>
                </tr>
                <tr>
                  <td className="p-2">미래 상상력</td>
                  <td className="p-2">함께하는 삶에 대한 상상 결여</td>
                  <td className="p-2">높음</td>
                </tr>
                <tr className="bg-[#fff8f8]">
                  <td className="p-2">불안 유발 요소</td>
                  <td className="p-2">작은 행동에도 과민반응</td>
                  <td className="p-2">중간</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 안내 텍스트 */}
        <div className="text-center text-[#84757a] text-sm">
          💡 Tip: 실제 서비스에서는 감정 그래프와 함께, 맞춤형 대화 시뮬레이션과 PDF 리포트를 함께 제공합니다.
        </div>
      </div>
    </div>
  );
}
