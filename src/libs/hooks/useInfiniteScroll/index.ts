import { AxiosPromise } from "axios";
import { useCallback, useEffect, useState } from "react";

export function useInfiniteScroll<T>(getData : (page: number) => AxiosPromise<any>, keyword: any, base: number): [T[], boolean, boolean]{
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState<number>(base);
  const [last, setLast] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(true);

  const scrollEvent = useCallback(()=>{
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight  
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight-200) { 
      setLoading(true);
    }
  },[])

  useEffect(()=> {
    setData([])
    setLast(false)
    setPage(0)
    setLoading(true)
    window.addEventListener("scroll",scrollEvent)
    return () => window.removeEventListener("scroll",scrollEvent);
  },[keyword])

  useEffect(()=>{
    window.addEventListener("scroll",scrollEvent)
    return () => window.removeEventListener("scroll",scrollEvent);
  },[])

  useEffect(()=>{
    if(loading && !last){
      setPage(page+1)
      getData(page+1).then((res)=>{
        console.log(res.data)
        if(res.data.meta?.is_end || res.data.length === 0) setLast(true);
        page === 0 ? setData([...data, ...res.data.documents])
        : setData([...data, ...res.data])
        setLoading(false);
      })
      .catch((e)=>{
        console.log(e)}
      )}
  },[loading, keyword])

  useEffect(()=>{
    if(last) window.removeEventListener("scroll",scrollEvent);
  },[last])

  return [data, loading, last];
}