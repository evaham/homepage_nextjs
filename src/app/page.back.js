'use client'

import Image from "next/image";
import React, { useEffect, useState } from 'react';
// import data from "/public/data/db.json";
import axios from "axios";

export default async function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/evaham/git_test_db/list_group1');
        setData(response.data);
        console.log(response)
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="min-h-96">
      <div className="">
        <div className="mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-6">
          <div className="relative flex flex-col py-5 px-10 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3">
            <p className="mt-1 text-2xl font-[700] text-center tracking-tight whitespace-pre-wrap lg:text-[2.7rem] lg:leading-snug lg:text-left dark:text-white">매장운영의 기본,<br/>투게더 POS 솔루션</p>
            <p className="mt-6 text-base text-slate-700 leading-tight lg:mt-6 lg:text-xl lg:leading-normal dark:text-slate-400">
              POS(판매 시점 정보 관리) 시스템은 매장 운영의 필수 도구입니다. 이 시스템은 상품 판매 시점에서 결제 처리, 재고 관리, 매출 분석 등 다양한 기능을 수행하여 효율적인 매장 운영을 돕습니다.
            </p>
          </div>
          {data.list_group1.map((list_group1)=>{
            return (
              <a href={`/detail/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-slate-200">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: list_group1.title }}></p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-opacity-10">
        <div className="mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-8">
          <div className="relative flex flex-col items-center justify-center py-5 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3">
            <p className="text-2xl text-blue-900 tracking-tighter lg:text-3xl dark:text-slate-400">효율적 운영을 위한 지원군</p>
            <p className="mt-3 text-4xl text-blue-900 font-extrabold tracking-tighter lg:text-6xl dark:text-white">부가 솔루션</p>
            <p className="mt-6 text-lg leading-6 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          {data.list_group1.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-white">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: list_group1.title }}></p>
                  {/* <p className="mt-auto text-sm">{list_group1.service}</p> */}
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className="">
        <div className="mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-8">
          <div className="relative flex flex-col items-center justify-center py-5 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3">
          <p className="text-2xl text-blue-900 tracking-tighter lg:text-3xl dark:text-slate-400">언제 어디서나 접속 완료!</p>
            <p className="mt-3 text-4xl text-blue-900 font-extrabold tracking-tighter lg:text-6xl dark:text-white">모바일 솔루션</p>
            <p className="mt-6 text-lg leading-6 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          {data.list_group1.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-slate-200">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: list_group1.title }}></p>
                  {/* <p className="mt-auto text-sm">{list_group1.service}</p> */}
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className="">
        <div className="mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-8">
          <div className="relative flex flex-col items-center justify-center py-5 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3">
            <p className="mt-3 text-4xl text-blue-900 font-extrabold tracking-tighter lg:text-6xl dark:text-white">투게더스 회사소개</p>
            <p className="mt-6 text-lg leading-6 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              투게더스는 중소유통을 위해 끊임없이 노력하는 회사입니다.
            </p>
          </div>
          {data.list_group1.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-slate-200">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: list_group1.title }}></p>
                  {/* <p className="mt-auto text-sm">{list_group1.service}</p> */}
                </div>
              </a>
            )
          })}
        </div>
      </div>

    </main>
  );
}
