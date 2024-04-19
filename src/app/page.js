import Image from "next/image";

export default async function Home() {
  const resp = await fetch('http://localhost:9999/list_group1/', { cache: 'no-store'});
  const topics = await resp.json();

  return (
    <main className="">
      <div className="">
        <div className="max-w-7xl mx-auto py-14 grid grid-cols-4 grid-flow-row gap-10">
          <div className="relative flex flex-col items-center justify-center p-3 col-start-1 col-end-3 row-start-1 row-end-3">
            <p className="text-4xl dark:sm:text-slate-400">매장운영의 기본 중 기본!</p>
            <p className="mt-1 text-6xl font-semibold dark:sm:text-white">투게더 포스 솔루션</p>
            <p className="mt-1 text-sm leading-6 col-start-1 sm:col-span-2 xl:mt-6 xl:row-start-4 xl:col-span-1 dark:text-slate-400">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </p>
          </div>
          {topics.map((list_group1)=>{
            return <div className=" h-60 p-6 rounded-2xl bg-slate-200 dark:bg-slate-800 cursor-pointer transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110" key={list_group1.id}><a href={`/read/${list_group1.id}`} className="">{list_group1.title}</a></div>
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
      <div id="coSection" className="">
        <div>회사소개</div>
      </div>
    </main>
  );
}
