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
              <a href={`/read/${list_group1.id}`} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md" key={list_group1.id}>
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
              <a href={`/read/${list_group1.id}`} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md" key={list_group1.id}>
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
              <a href={`/read/${list_group1.id}`} className="relative overflow-hidden flex flex-col-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-sm bg-white dark:bg-slate-800 lg:h-64 lg:transition lg:ease-in-out lg:delay-30 lg:hover:-translate-y-1 lg:hover:scale-105 lg:hover:shadow-md" key={list_group1.id}>
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


      {/* <div className="">
        <div className="max-w-7xl mx-auto py-14 px-5 gap-5 grid sm:grid-cols-4 sm:grid-flow-row sm:gap-10">
          <div className="relative flex flex-col items-center justify-center py-5">
            <p className="text-2xl text-4xl dark:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-4xl font-semibold text-6xl dark:text-white font-co">투게더 포스 솔루션</p>
            <p className="mt-6 text-lg leading-6 col-start-1 sm:col-span-2 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔
            </p>
          </div>
          {topics.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} className="overflow-hidden flex flex-row-reverse h-40 rounded-xl ring-1 ring-slate-900/5 shadow-xl bg-white dark:bg-slate-800 sm:transition sm:ease-in-out sm:delay-30 sm:hover:-translate-y-1 sm:hover:scale-105 sm:hover:shadow-md" key={list_group1.id}>
                <div className="flex-1 flex flex-col px-6 py-4">
                  <p className="mb-3 text-sm text-slate-500">{list_group1.group}</p>
                  <p className="text-xl font-bold text-slate-700 leading-tight">{list_group1.title}</p>
                  <p className="mt-auto text-sm text-slate-500">{list_group1.service}</p>
                </div>
                <div className="relative overflow-hidden flex flex-1 justify-center items-center bg-slate-200">
                  <img src={list_group1.img} className="w-full min-h-full" alt="" />
                </div>
              </a>
            )
          })}
        </div>
      </div> */}

      {/* <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-14 grid grid-cols-4 grid-flow-row gap-10">
          <div className="relative flex flex-col items-center justify-center p-3 col-start-3 col-end-5 row-start-1 row-end-3">
            <p className="text-4xl dark:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-6xl font-semibold dark:text-white">투게더 포스 솔루션</p>
            <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </p>
          </div>
          {topics.map((list_group1)=>{
            return <div className="h-60 p-6 rounded-2xl bg-slate-300 cursor-pointer transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110" key={list_group1.id}><a href={`/read/${list_group1.id}`}>{list_group1.title}</a></div>
          })}
        </div>
      </div>
      <div className="">
        <div className="max-w-7xl mx-auto py-14 grid grid-cols-4 grid-flow-row gap-10">
          <div className="relative flex flex-col items-center justify-center p-3 col-start-2 col-end-4 row-start-1 row-end-3">
            <p className="text-4xl dark:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-6xl font-semibold dark:text-white">투게더 포스 솔루션</p>
            <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </p>
          </div>
          {topics.map((list_group1)=>{
            return <div className="h-60 p-6 border rounded-2xl bg-slate-200 dark:bg-slate-800 cursor-pointer transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110" key={list_group1.id}><a href={`/read/${list_group1.id}`}>{list_group1.title}</a></div>
          })}
        </div>
      </div> */}
    </main>
  );
}
