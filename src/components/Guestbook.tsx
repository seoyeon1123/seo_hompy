import { useState, useEffect } from 'react';
import supabase from '../supabaseClient';

interface GuestbookProps {
  toggleModal: () => void;
}

const Guestbook: React.FC<GuestbookProps> = ({ toggleModal }) => {
  const [guestbookEntries, setGuestbookEntries] = useState<any[]>([]); // Store the fetched entries

  // Fetch guestbook entries from Supabase
  const getData = async () => {
    const { data, error } = await supabase.from('guestbook_entries').select('*'); // Corrected syntax

    if (error) {
      console.error('Error fetching guestbook entries:', error);
    } else {
      setGuestbookEntries(data || []);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-CA');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center h-screen items-center">
        <div className="bg-[#16423C] p-8 rounded-lg w-[450px] h-[700px] shadow-lg transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
          <h3 className="text-3xl font-bold text-[#E9EFEC] mb-4 text-center">서연이의 방명록 </h3>
          <div className="h-[550px] overflow-y-auto">
            {guestbookEntries.length > 0 ? (
              guestbookEntries.map((entry: any) => (
                <div key={entry.id} className="text-[#E9EFEC] mb-4 p-4 border-b border-gray-700">
                  <p className="font-semibold text-lg">{entry.name}</p>
                  <div className="flex flex-row justify-between items-center">
                    {' '}
                    <p className="text-gray-300 mt-1">{entry.message}</p>
                    <p className="text-sm text-gray-400 mt-2">{formatDate(entry.created_at)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">
                불러오는 중이에요 <br />
                잠시만 기다려주세요 !
              </p>
            )}
          </div>
          <button
            onClick={toggleModal}
            className="w-full mt-4 hover:bg-[#0a312d] text-white py-2 rounded-lg bg-[#10413c] transition"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Guestbook;
