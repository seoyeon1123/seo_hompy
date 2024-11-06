import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const PageViewCounter = () => {
  const [views, setViews] = useState(0);
  const pageId = 'view';
  const today = new Date().toISOString().split('T')[0];

  const fetchViews = async () => {
    try {
      const { data, error } = await supabase
        .from('page_views')
        .select('views')
        .eq('page_id', pageId + today)
        .eq('date', today)
        .maybeSingle();

      if (error) {
        console.error('Failed to fetch page views:', error);
        return;
      }

      if (data) {
        const currentViews = data.views;
        setViews(currentViews);
        incrementViews(currentViews);
      } else {
        const newViewsCount = 1;
        await createNewViewEntry(newViewsCount);
        setViews(newViewsCount);
      }
    } catch (error) {
      console.error('Failed to fetch page views:', error);
    }
  };

  // 조회수 증가 함수
  const incrementViews = async (currentViews: number) => {
    try {
      const newViewsCount = currentViews + 1;

      await updateViewEntry(newViewsCount);

      setViews(newViewsCount); // 업데이트된 조회수 상태 설정
    } catch (error) {
      console.error('Failed to increment page views:', error);
    }
  };

  const updateViewEntry = async (newViewsCount: number) => {
    try {
      // 기존 데이터 업데이트 (동일한 page_id와 date에 대해)
      const { error } = await supabase
        .from('page_views')
        .update({ views: newViewsCount }) // 조회수만 업데이트
        .eq('page_id', pageId + today)
        .eq('date', today); // 동일한 page_id와 date에 대해서만 업데이트

      if (error) {
        console.error('Failed to update page views entry:', error);
        return;
      }
    } catch (error) {
      console.error('Failed to update page views entry:', error);
    }
  };

  // 새로운 조회수 데이터 생성 함수
  const createNewViewEntry = async (newViewsCount: number) => {
    try {
      const { error } = await supabase
        .from('page_views')
        .insert([{ page_id: pageId + today, views: newViewsCount, date: today }]);

      if (error) {
        console.error('Failed to create new page views entry:', error);
        return;
      }
    } catch (error) {
      console.error('Failed to create new page views entry:', error);
    }
  };

  useEffect(() => {
    fetchViews();
  }, []);

  return <span>{views}</span>;
};

export default PageViewCounter;
