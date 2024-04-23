'use client'

import { useState, useEffect } from 'react';

export default function MyComponent() {
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
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredData(filtered);
  }, [searchQuery, data]);

  // 검색어 입력값이 변경될 때 실행되는 함수
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}