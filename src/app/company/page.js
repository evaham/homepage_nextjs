import Image from "next/image";

export default async function Company () {
  const resp = await fetch('http://localhost:9999/list_group1/', { cache: 'no-store'});
  const topics = await resp.json();

  return (
    <main >
      <div className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-14 grid grid-cols-4 grid-flow-row gap-10">
          {topics.map((list_group1)=>{
            return <div className="h-60 p-6 rounded-2xl bg-slate-300 cursor-pointer transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-110" key={list_group1.id}><a href={`/read/${list_group1.id}`}>{list_group1.title}</a></div>
          })}
        </div>
      </div>
    </main>
  );
}
