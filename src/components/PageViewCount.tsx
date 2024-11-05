import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const PageViewCounter = () => {
  const [views, setViews] = useState(0);
  const pageId = 'view'; // 조회수 추적할 페이지 ID

  // 조회수 가져오는 함수
  const fetchViews = async () => {
    try {
      const { data, error } = await supabase.from('page_views').select('views').eq('page_id', pageId).single();

      if (error) {
        console.error('Failed to fetch page views:', error);
        return;
      }

      const initialViews = data?.views || 0;
      setViews(initialViews);

      // 조회수를 불러온 후 1 증가시키기
      incrementViews(initialViews);
    } catch (error) {
      console.error('Failed to fetch page views:', error);
    }
  };

  // 조회수 증가 함수
  const incrementViews = async (currentViews: number) => {
    try {
      const newViewsCount = currentViews + 1;

      const { error: upsertError } = await supabase
        .from('page_views')
        .upsert({ page_id: pageId, views: newViewsCount }, { onConflict: 'page_id' });

      if (upsertError) {
        console.error('Failed to upsert page views:', upsertError);
        return;
      }

      setViews(newViewsCount); // 업데이트된 조회수 상태 설정
    } catch (error) {
      console.error('Failed to increment page views:', error);
    }
  };

  // 컴포넌트가 처음 로드될 때 조회수 불러오기
  useEffect(() => {
    fetchViews();
  }, []); // 빈 의존성 배열로, 컴포넌트 첫 로드 시에만 실행

  return <span>{views}</span>;
};

export default PageViewCounter;
