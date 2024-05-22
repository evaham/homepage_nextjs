'use client'

import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import React, { useState , useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { useRouter , usePathname } from "next/navigation";

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'] 
})

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  const router = useRouter();
  const pathname = usePathname();



  // 1. 다크 모드 상태를 관리하는 상태 변수 선언
  const [isDarkMode, setDarkMode] = useState(false);

  // 2. 컴포넌트가 처음 렌더링될 때 한 번만 실행되는 로직
  useEffect(() => {
    // 로컬 스토리지에서 저장된 다크 모드 상태를 불러옴
    const storedDarkMode = localStorage.getItem('isDarkMode');
    // 저장된 상태가 존재할 경우 해당 상태를 적용
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);

  // 3. 다크 모드를 토글하는 함수
  const toggleDarkMode = () => {
    // 현재 상태를 반전시켜서 새로운 상태값 설정
    const newDarkMode = !isDarkMode;
    // 상태 업데이트
    setDarkMode(newDarkMode);
    // 새로운 상태값을 로컬 스토리지에 저장
    localStorage.setItem('isDarkMode', JSON.stringify(newDarkMode));
  };


  return (
    <html lang="ko" className={`${notoSansKr.className} ${isDarkMode === true ? 'dark' : ''}`} data-js-focus-visible>
      <body className={"bg-slate-50 dark:bg-slate-900"}>
        <div id="top" className="sr-only"></div>
        <ScrollLink to="top" spy={true} smooth={true} offset={-70} duration={500} className="fixed bottom-16 right-16 w-14 h-14 flex justify-center items-center rounded-full bg-slate-50 z-50">
          <span className="sr-only">맨위로</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 -960 960 960" fill="#000"><path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"/></svg>
        </ScrollLink>
        <header className="sticky top-0 border-b bg-white dark:bg-slate-600 shadow-sm z-50">
          <div className="flex flex-1 p-6">
            <Link href={"/"} className="flex-1">
              <img src="/images/BI.png" alt="logo" width={180} height={26} />
            </Link>
            <div className="flex-1 justify-center dark:text-white hidden lg:flex text-lg">
              {/* <ScrollLink activeClass="active" to="coSection" spy={true} smooth={true} offset={-70} duration={500} className="px-5 cursor-pointer">회사소개</ScrollLink> */}
              <Link href={"/company"} className={`relative mx-4 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.2rem] after:bg-blue-900 after:transition-[.3s] hover:after:w-full ${pathname === '/company' ? 'text-blue-900 font-bold after:w-[100%]' : 'text-slate-600'}`}>
                회사소개
              </Link>
              <Link href={"/service"} className={`relative mx-4 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[0.2rem] after:bg-blue-900 after:transition-[.3s] hover:after:w-full ${pathname === '/service' ? 'text-blue-900 font-bold after:w-[100%]' : 'text-slate-600'}`}>
                서비스소개
              </Link>
            </div>
            <div className="relative flex-1 text-right">
              <button type="button" onClick={toggleDarkMode}>
                <span className="dark:hidden">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path><path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500"></path>
                  </svg>
                </span>
                <span className="hidden dark:inline">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path><path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path><path d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </header>
        {children}
        <div className="py-10 bg-indigo-800">
          <div className="w-[30rem] mx-auto lg:w-[80rem] flex flex-col lg:flex-row justify-center font-bold ">
            <button className="flex-1 m-6 p-6 rounded-lg bg-white">투게더포스<br/>도입문의</button>
            <button className="flex-1 m-6 p-6 rounded-lg bg-white">투게더클럽<br/>입정문의</button>
            <button className="flex-1 m-6 p-6 rounded-lg bg-white">제휴문의</button>
          </div>
        </div>
        <footer className="py-10 bg-gray-700">
          <div className="w-[30rem] mx-auto lg:w-[80rem]">
            <a><img src="/images/BI_w.png" alt="logo" className="" /></a>
            <address className="py-5 not-italic">
              <a href="#">개인정보처리방침</a>
              <p className="text-slate-300">
                <span className="block mb-3 tracking-wider font-semibold text-white">(주)투게더스</span>
                <span>본사 : 인천시 부평구 부평대로 301 남광센트렉스 901</span>
                <span className="mx-4 text-slate-400">·</span>
                <span>대표이사 : 이근수</span><br />
                <span>사업자등록번호 : 137-81-39709</span>
                <span className="mx-4 text-slate-400">·</span>
                <span>통신판매업 신고번호 : 제2009-인천부평-00182호</span>
              </p>
            </address>
            <p className="text-slate-400">COPYRIGHT © TOGETHERs Corp. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
