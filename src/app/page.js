import Image from "next/image";

export default async function Home() {
  const resp = await fetch('http://localhost:9999/list_group1/', { cache: 'no-store'});
  const topics = await resp.json();

  return (
    <main className="min-h-96">
      <div className="">
        <div className="w-[30rem] mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-6">
          <div className="relative flex flex-col items-center justify-center py-5 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3">
            <p className="text-2xl text-blue-900 tracking-tighter lg:text-3xl dark:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-3 text-4xl text-blue-900 font-extrabold tracking-tighter lg:text-6xl dark:text-white">포스 솔루션</p>
            <p className="mt-6 text-lg leading-6 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          {topics.map((list_group1)=>{
            return (
              <a href={`/detail/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-slate-200">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight">{list_group1.title}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-opacity-10">
        <div className="w-[30rem] mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-8">
          <div className="relative flex flex-col items-center justify-center py-5 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3">
            <p className="text-2xl text-blue-900 tracking-tighter lg:text-3xl dark:text-slate-400">효율적 운영을 위한 지원군</p>
            <p className="mt-3 text-4xl text-blue-900 font-extrabold tracking-tighter lg:text-6xl dark:text-white">부가 솔루션</p>
            <p className="mt-6 text-lg leading-6 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          {topics.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-white">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight">{list_group1.title}</p>
                  {/* <p className="mt-auto text-sm">{list_group1.service}</p> */}
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className="">
        <div className="w-[30rem] mx-auto py-32 px-5 gap-5 grid lg:w-[80rem] lg:grid-cols-4 lg:grid-flow-row lg:gap-8">
          <div className="relative flex flex-col items-center justify-center py-5 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3">
          <p className="text-2xl text-blue-900 tracking-tighter lg:text-3xl dark:text-slate-400">언제 어디서나 접속 완료!</p>
            <p className="mt-3 text-4xl text-blue-900 font-extrabold tracking-tighter lg:text-6xl dark:text-white">모바일 솔루션</p>
            <p className="mt-6 text-lg leading-6 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          {topics.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} key={list_group1.id} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md">
                <div className="relative overflow-hidden min-w-full min-h-full bg-slate-200">
                  <img src={list_group1.img} className="absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]" alt="" />
                </div>
                <div className="absolute top-0 left-0 bott right-0 flex h-32 flex-col px-6 pt-4 pb-6 bg-gradient-to-b from-[rgba(0,0,0,.5)] text-white">
                  <p className="mb-0 text-sm">{list_group1.cate}</p>
                  <p className="text-xl font-bold leading-tight">{list_group1.title}</p>
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
