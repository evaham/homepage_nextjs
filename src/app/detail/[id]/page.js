export default async function DetailPage(props) {
  const id = props.params.id;
  const resp = await fetch(`http://localhost:9999/list_group1/${id}`, { cache: 'no-store'});
  const topics = await resp.json();
  const contentbody = topics.body;

  return (
    <main>
      <div className="w-[30rem] mx-auto pt-28 lg:w-[51rem]">
        <div className="">
          <p className="text-xl text-center tracking-tighter">{topics.cate}</p>
          <p className="mt-4 text-center text-5xl font-bold tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: topics.title }}></p>
        </div>
        <div className="flex justify-center mt-20 text-center">
          <img src={topics.img} className="w-full" alt="" />
        </div>
        <div className="mt-5 mb-10">
          <div dangerouslySetInnerHTML={{ __html: contentbody }}></div>
        </div>
      </div>
    </main>
  )
}