import Image from "next/image";

export default async function Home() {
  const resp = await fetch('http://localhost:9999/list_group1/', { cache: 'no-store'});
  const topics = await resp.json();

  return (
    <main className="">
      <div className="">
        <div className="max-w-7xl mx-auto py-14 grid sm:grid-cols-4 sm:grid-flow-row sm:gap-10">
          <div className="relative flex flex-col items-center justify-center p-3 col-start-1 col-end-3 row-start-1 row-end-3">
            <p className="text-2xl sm:text-4xl dark:sm:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-4xl font-semibold sm:text-6xl dark:sm:text-white font-co">투게더 포스 솔루션</p>
            <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </p>
          </div>
          {topics.map((list_group1)=>{
            return (
              <a href={`/read/${list_group1.id}`} className="overflow-hidden flex flex-col h-80 rounded-2xl border border-slate-100 bg-slate-100 dark:bg-slate-800 transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-105 hover:shadow-md" key={list_group1.id}>
                <div className="flex flex-col flex-auto px-6 py-4">
                  <p className="mb-3 text-sm text-slate-500">{list_group1.group}</p>
                  <p className="text-xl font-bold text-slate-700 leading-tight">{list_group1.title}</p>
                  <p className="mt-auto text-sm text-slate-500">{list_group1.service}</p>
                </div>
                <div className="h-3/6 mt-auto bg-slate-200">
                  <img src={list_group1.img} className="w-full min-h-full" alt="" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-14 grid grid-cols-4 grid-flow-row gap-10">
          <div className="relative flex flex-col items-center justify-center p-3 col-start-3 col-end-5 row-start-1 row-end-3">
            <p className="text-4xl dark:sm:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-6xl font-semibold dark:sm:text-white">투게더 포스 솔루션</p>
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
            <p className="text-4xl dark:sm:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-6xl font-semibold dark:sm:text-white">투게더 포스 솔루션</p>
            <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </p>
          </div>
          {topics.map((list_group1)=>{
            return <div className="h-60 p-6 border rounded-2xl bg-slate-200 dark:bg-slate-800 cursor-pointer transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110" key={list_group1.id}><a href={`/read/${list_group1.id}`}>{list_group1.title}</a></div>
          })}
        </div>
      </div>
    </main>
  );
}
