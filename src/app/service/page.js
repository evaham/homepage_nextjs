'use client'

import { useState, useEffect } from "react";

export default function Service() {
  // API에서 받아온 데이터를 저장할 상태
  const [data, setData] = useState([]);
  // 필터링된 데이터를 저장할 상태
  const [filteredData, setFilteredData] = useState([]);
  // 검색어 상태
  const [searchQuery, setSearchQuery] = useState('');

  // 컴포넌트가 마운트될 때 한번만 실행
  useEffect(() => {
    // API로부터 데이터를 가져오는 비동기 함수
    const fetchData = async () => {
      try {
        // API 호출하여 데이터 가져오기
        const response = await fetch('http://localhost:9999/list_group1/');

        // JSON 형식으로 파싱하여 데이터 저장
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData 함수 실행
    fetchData();
  }, []);


  // 검색어 또는 데이터가 변경될 때마다 실행
  useEffect(() => {
    if (!searchQuery) {
      // 검색어가 없으면 모든 데이터를 보여줌
      setFilteredData(data);
      return;
    }
    // 검색어가 변경될 때마다 필터링된 데이터를 업데이트
    const filtered = data.filter(item =>
      // 검색어가 포함된 데이터만 필터링 하여 반환
      item.cate.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredData(filtered);
  }, [searchQuery, data]);

  // 검색어 입력값이 변경될 때 실행되는 함수
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const tab = [
    {id: 1, cate: "", search : "", name : "전체"},
    {id: 2, cate: "포스솔루션", search : "포스솔루션", name : "포스솔루션"},
    {id: 3, cate: "모바일솔루션", search : "모바일솔루션", name : "모바일솔루션"}
  ];

  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (e) => {
    setSelectedTab (e)
    setSearchQuery (e);
  };


  return (
    <main>
      <div className="w-[30rem] mx-auto pt-28 lg:w-[80rem]">
        <p className="text-4xl text-center font-bold tracking-tighter">서비스 소개</p>
        <p className="my-5 text-lg text-center text-slate-600 tracking-tighter">투게더스에서 제공하는 서비스를 소개합니다.</p>
      </div>

      <div className="flex max-w-7xl mx-auto py-14">
        <ul className="flex flex-col items-start w-2/5 mr-8" >
          {tab.map((tab)=>{
            return (
              <li key={tab.id} onClick={() => handleTabClick(tab.cate)} className={`font-bold text-slate-500 bg-slate-200 rounded-full mt-2 px-6 py-2 cursor-pointer ${selectedTab === tab.cate ? 'bg-blue-900 text-white' : ''}`}>{tab.name}</li>
            )
          })}
        </ul>
        <div className="grid grid-cols-3 grid-flow-row gap-10">
          {filteredData.map(item => (
            <a key={item.id} className="overflow-hidden flex flex-col h-80 rounded-2xl border border-slate-100 bg-white dark:bg-slate-800 transition ease-in-out delay-30 hover:-translate-y-1 hover:scale-105 hover:shadow-md">
              <div className="flex flex-col flex-auto px-6 py-4">
                <p className="mb-3 text-sm text-slate-500">{item.cate}</p>
                <p className="text-xl font-bold text-slate-700 leading-tight">{item.title}</p>
                <p className="mt-auto text-sm text-slate-500">{item.service}</p>
              </div>
              <div className="h-3/6 mt-auto bg-slate-200">
                <img src={item.img} className="w-full min-h-full" alt="" />
              </div>            
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}