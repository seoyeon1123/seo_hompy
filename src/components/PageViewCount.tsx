import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const PageViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('page_views').select('views').eq('page_id', 'view');
      console.log(
        'views',
        data?.map((data) => data.views),
      );
    };
    fetchData();
  });

  // const incrementViews = async () => {
  //   try {
  //     const newViewsCount = views + 1; // 현재 조회수에 1을 더함

  //     const { error: upsertError } = await supabase
  //       .from('page_views')
  //       .upsert({ page_id: pageId, views: newViewsCount }, { onConflict: 'page_id' });

  //     if (upsertError) {
  //       console.error('Failed to upsert page views:', upsertError);
  //       return;
  //     }

  //     // 업데이트된 조회수 상태 설정
  //     setViews(newViewsCount);
  //   } catch (error) {
  //     console.error('Failed to increment page views:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchViews(); // 기존 조회수 가져오기
  // }, []);

  // useEffect(() => {
  //   incrementViews(); // 조회수가 증가하도록 호출
  // }, [views]);

  return <span>{views}</span>;
};

export default PageViewCounter;
