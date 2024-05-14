export default async function DetailPage(props) {
  const id = props.params.id;
  const resp = await fetch(`http://localhost:9999/list_group1/${id}`, { cache: 'no-store'});
  const topics = await resp.json();


  console.log(topics)

  return (
    <main>
      <div className="w-[30rem] mx-auto pt-28 lg:w-[80rem]">
        <div className="">
          <p className="text-center">{topics.cate}</p>
          <p className="mt-4 text-4xl text-center font-bold">{topics.title}</p>
        </div>
        
        <div className="flex justify-center mt-20 text-center">
          <img src={topics.img} className="w-full" alt="" />
        </div>
        
        <div className="">
            <p>{topics.body}</p>
        </div>
        <div>
          <div></div>
        </div>
        
      </div>
    </main>
  )
}