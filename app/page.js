'use client';

import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  CheckCheck,
  FileText,
  Menu,
  ArrowUp,
  X
} from 'lucide-react';

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
      <div className="text-[#F7BFBF]">{icon}</div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-[#84757a] text-sm">{desc}</p>
      </div>
    </div>
  );
}

const testimonials = [
  { title: '감정이 정리되었어요', content: 'BeforeYes 덕분에 제 감정을 혼자서도 명확하게 바라볼 수 있었어요.', name: '30대 예비신부, 하은님' },
  { title: '파혼 직전의 마음을 다잡았어요', content: 'BeforeYes의 시뮬레이션을 통해 감정적 이유와 실제 이유를 구분할 수 있었어요.', name: '20대 후반, 경민님' },
  { title: '상대에게 감정을 잘 말하게 되었어요', content: '챗봇 덕분에 상대에게 어떻게 감정을 표현해야 할지 배웠어요.', name: '신혼 3개월차, 윤정님' },
  { title: '혼자서도 할 수 있어서 좋았어요', content: '상담은 부담스럽고 BeforeYes는 조용히 나 자신을 돌아볼 수 있었어요.', name: '결혼 1년차, 성훈님' },
];

function TestimonialCard({ title, content, name }) {
  return (
    <div className="min-w-[260px] max-w-sm bg-white rounded-xl shadow-md p-6 mx-2">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-[#84757a] mb-4">{content}</p>
      <p className="text-xs text-right text-[#5c4f4f]">- {name}</p>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F7BFBF] py-20 overflow-x-auto">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          리뷰에서도 알 수 있어요<br />왜 BeforeYes인지
        </h2>
        <div className="flex overflow-x-auto hide-scroll-bar px-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  { stage: '1단계', title: '감정 진단 테스트 (Lite)', desc: '간단한 감정/불안 유형 테스트 + 요약 피드백', price: '무료' },
  { stage: '2단계', title: '감정 리포트 미리보기', desc: '진단 요약 + 시뮬 맛보기 + 리포트 프레임', price: '3,900원' },
  { stage: '3단계', title: '정식 감정 리포트 PDF', desc: '갈등 분석 + 대화 요약 + 가이드 포함', price: '14,900원' },
  { stage: '4단계', title: '프리미엄 번들', desc: '챗봇 + 시뮬 + PDF 포함', price: '19,900원' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState(12000);
  const [reports, setReports] = useState(5800);
  const [simulations, setSimulations] = useState(3200);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev => (prev < 20000 ? prev + Math.floor(Math.random() * 10) : prev));
      setReports(prev => (prev < 10000 ? prev + Math.floor(Math.random() * 5) : prev));
      setSimulations(prev => (prev < 5000 ? prev + Math.floor(Math.random() * 4) : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const closeMenuAndScroll = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="relative bg-[#FFF9F6] text-[#5c4f4f] font-['Pretendard','Noto Sans KR',sans-serif]">
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/' }>
            <img src="/BeforeYes.png" alt="BeforeYes Logo" className="h-10" />
          </div>
          <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#features">기능</a>
            <a href="#how-it-works">이용방법</a>
            <a href="#pricing">가격</a>
            <a href="#testimonials">후기</a>
            <a href="/test" className="btn btn-secondary">무료 테스트</a>
            <a href="#pricing" className="btn btn-primary">시작하기</a>
          </nav>
        </div>
        {menuOpen && (
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 px-4 py-6 flex flex-col gap-4">
            <button className="self-end mb-2" onClick={() => setMenuOpen(false)}><X size={24} /></button>
            <div className="text-pink-500 font-bold text-lg mb-4">현재 유형: 감정 미완성형</div>
            <a onClick={() => closeMenuAndScroll('#features')} className="text-[#f39292] font-semibold cursor-pointer">기능</a>
            <a onClick={() => closeMenuAndScroll('#how-it-works')} className="cursor-pointer">이용방법</a>
            <a onClick={() => closeMenuAndScroll('#pricing')} className="cursor-pointer">가격</a>
            <a onClick={() => closeMenuAndScroll('#testimonials')} className="cursor-pointer">후기</a>
            <a onClick={() => { window.location.href = '/test'; setMenuOpen(false); }} className="btn btn-secondary">무료 테스트</a>
            <a onClick={() => closeMenuAndScroll('#pricing')} className="btn btn-primary">시작하기</a>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 text-center bg-white">
        <div className="max-w-screen-md mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            “이 사람이 맞을까?" <br />
            <span className="text-[#d88]">결혼 그 후에 후회가 되면 어떻게 하죠?</span>
          </h1>
          <p className="text-lg text-[#84757a] mb-8">
            BeforeYes는 결혼 전 고민하는 당신을 위해, 혼자서 감정을 정리할 수 있는 공간입니다.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/report" className="px-6 py-3 bg-[#f4a3a3] text-white rounded-full shadow-md hover:bg-[#f39292] transition">예시 리포트 받기</a>
            <a href="/test" className="px-6 py-3 border-2 border-[#F7BFBF] text-[#f39292] rounded-full hover:bg-[#fff3f2] transition">무료 테스트 시작</a>
          </div>
        </div>
      </section>

      <section className="bg-[#F7BFBF] text-[#5c4f4f] py-16 text-center">
        <p className="text-sm text-[#84757a] mb-2">혼자 정리하기 어려운 감정, 함께한 이들이 이렇게 많습니다.</p>
        <div className="flex justify-center gap-12 font-bold text-xl">
          <div><div>{users.toLocaleString()}+</div><p className="text-sm mt-1 text-[#84757a]">이용자 수</p></div>
          <div><div>{reports.toLocaleString()}+</div><p className="text-sm mt-1 text-[#84757a]">감정 리포트 생성</p></div>
          <div><div>{simulations.toLocaleString()}+</div><p className="text-sm mt-1 text-[#84757a]">시뮬레이션 진행</p></div>
        </div>
      </section>

      <TestimonialsSection />

      <section id="features" className="py-20">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">혼자서도 할 수 있는<br />결혼 전 감정 정리</h2>
            <p className="text-[#84757a]">가족이나 친구에게 말하기 힘든 고민, AI가 함께 정리해드립니다.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard icon={<CheckCheck size={32} />} title="결혼 확신 체크리스트" desc="불안 요소를 항목별로 시각화" />
            <FeatureCard icon={<MessageCircle size={32} />} title="AI 저널링 챗봇" desc="AI와 대화하며 감정 정리" />
            <FeatureCard icon={<ArrowUp size={32} />} title="결혼 시뮬레이션 대화" desc="실제 상황 AI 시뮬" />
            <FeatureCard icon={<FileText size={32} />} title="PDF 감정 리포트" desc="갈등 예측, 분석 제공" />
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">나에게 맞는 플랜을 선택하세요</h2>
            <p className="text-[#84757a]">감정 정리의 깊이에 따라 다양한 구성을 제공합니다.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {pricingPlans.map(({ stage, title, desc, price }, i) => (
              <div key={i} className="bg-[#FFF9F6] p-6 rounded-xl shadow-md border border-[#f4a3a3] text-center">
                <h4 className="text-sm text-[#f39292] font-semibold mb-2">{stage}</h4>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#84757a] text-sm mb-4">{desc}</p>
                <div className="text-lg font-bold text-[#f39292]">{price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}