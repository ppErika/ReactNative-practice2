import {useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // API 진행여부를 확인
  const [inProgress, setInProgress] = useState(false);

  // useEffect에 전달되는 함수는 비동기함수를 전달할 수 없기 때문에
  useEffect(() => {
    // 비동기함수를 사용해야 할 때에는 useEffect 내부에서 비동기함수를 정의하고 호출하는 방법을 사용
    const getData = async () => {
      try {
        setInProgress(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setInProgress(false);
      }
    };
    getData();
  }, []);

  return {data, error, inProgress};
};
