"use client";

import React, { useState } from 'react';
import { CheckCheck, MessageCircle, ArrowUp, FileText, Menu } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#FFF9F6] text-[#5c4f4f] font-pretendard">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-[#F7BFBF]">Before</span>
            <span className="text-[#f4a3a3]">Yes</span>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </div>
          <nav className={`md:flex gap-6 text-sm font-medium ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <a href="#features" className="hover:text-[#f4a3a3]">기능</a>
            <a href="#how-it-works" className="hover:text-[#f4a3a3]">이용방법</a>
            <a href="#pricing" className="hover:text-[#f4a3a3]">가격</a>
            <a href="#testimonials" className="hover:text-[#f4a3a3]">후기</a>
            <a href="#" className="px-4 py-2 rounded-full border-2 border-[#F7BFBF] text-[#f4a3a3] hover:bg-[#fff3f2]">무료 테스트</a>
            <a href="#pricing" className="px-4 py-2 rounded-full bg-[#F7BFBF] text-white hover:bg-[#f39292]">시작하기</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-16 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          드레스, 청첩장까지는 준비됐는데...<br />
          <span className="bg-gradient-to-r from-[#F7BFBF] to-[#a3c9aa] text-transparent bg-clip-text">
            그 후에 후회가 되면 어떻게 하죠?
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-[#84757a] text-lg">
          BeforeYes는 결혼 전 확신이 없는 당신의 감정을 정리해주는 AI 기반 리포트 서비스입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#pricing" className="bg-[#f4a3a3] text-white px-6 py-3 rounded-full shadow hover:bg-[#f39292] transition-all">감정 리포트 받기</a>
          <a href="#" className="border-2 border-[#F7BFBF] text-[#f4a3a3] px-6 py-3 rounded-full hover:bg-[#fff3f2] transition-all">무료 테스트 시작</a>
        </div>
        <div className="mt-10 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <img src="/api/placeholder/800/450" alt="BeforeYes 서비스 화면" className="w-full" />
        </div>
      </main>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">혼자서도 할 수 있는<br />결혼 전 감정 정리</h2>
          <p className="text-[#84757a] max-w-2xl mx-auto">
            상대방에게 말하기 어렵고, 가족이나 친구에게도 털어놓기 힘든 결혼 전 고민을 AI와 함께 정리해보세요.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FFF9F6] rounded-lg shadow hover:shadow-md transition">
              <CheckCheck className="mx-auto text-[#F7BFBF]" size={40} />
              <h3 className="mt-4 font-semibold text-lg">결혼 확신 체크리스트</h3>
              <p className="text-sm text-[#84757a] mt-2">관계 만족도, 가치관 차이, 신뢰 문제 등 항목별로 나의 불안 요소를 시각화하여 보여드립니다.</p>
            </div>
            <div className="p-6 bg-[#FFF9F6] rounded-lg shadow hover:shadow-md transition">
              <MessageCircle className="mx-auto text-[#F7BFBF]" size={40} />
              <h3 className="mt-4 font-semibold text-lg">AI 저널링 챗봇</h3>
              <p className="text-sm text-[#84757a] mt-2">마음속 이야기를 정리해주는 AI와 대화하며 객관적인 시선으로 감정을 정리해 볼 수 있습니다.</p>
            </div>
            <div className="p-6 bg-[#FFF9F6] rounded-lg shadow hover:shadow-md transition">
              <ArrowUp className="mx-auto text-[#F7BFBF]" size={40} />
              <h3 className="mt-4 font-semibold text-lg">결혼 시뮬레이션 대화</h3>
              <p className="text-sm text-[#84757a] mt-2">결혼 후 발생할 수 있는 실제 상황을 AI와 시뮬레이션하며 미리 대비해 볼 수 있습니다.</p>
            </div>
            <div className="p-6 bg-[#FFF9F6] rounded-lg shadow hover:shadow-md transition">
              <FileText className="mx-auto text-[#F7BFBF]" size={40} />
              <h3 className="mt-4 font-semibold text-lg">PDF 감정 리포트</h3>
              <p className="text-sm text-[#84757a] mt-2">나의 감정 상태, 갈등 예측, 관계 만족도를 분석한 전문적인 리포트를 받아보세요.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
