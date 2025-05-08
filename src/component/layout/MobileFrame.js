'use client';

export default function MobileFrame({children}) {

  return (
    <>
      <div className="w-[25%] min-w-[380px] max-x-[420px] h-[85%] px-6 bg-white rounded-2xl flex justify-center items-center 
      relative overflow-hidden">
        {children}
      </div>
    </>
  );
}