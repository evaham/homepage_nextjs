
import DBdata from "/public/data/db.json";

export default async function DetailPage(props) {
  const id = props.params.id;
  const resp = DBdata.list_group1.find(item => item.id === parseInt(id));
  


  return (
    <div>
      <div className="w-[30rem] mx-auto pt-28 lg:w-[51rem]">
        <div className="">
          <p className="text-xl text-center tracking-tighter">{resp.cate}</p>
          <p className="mt-4 text-center text-5xl font-bold tracking-tighter leading-tight" dangerouslySetInnerHTML={{ __html: resp.title }}></p>
        </div>
        <div className="flex justify-center mt-20 text-center">
          <img src={resp.img} className="w-full" alt="" />
        </div>
        <div className="mt-5 mb-10">
          <div dangerouslySetInnerHTML={{ __html: resp.body }}></div>
        </div>
      </div>
    </div>
  )
}