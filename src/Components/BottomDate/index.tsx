export const BottomDate = () => {
  return (
    <>
      <div className="w-11/12 md:w-11/12 lg:w-3/12 h-[90px] md:h-[140px] lg:h-[120px] mt-5 flex-col items-center justify-center md:ml-12 lg:ml-2">
        <div className="flex h-4/12 w-14 items-center justify-center md:ml-1">
          <h1 className="text-[#878a86] text-3xl md:text-6xl font-bold text-center">
            11
          </h1>
        </div>
        <div className="flex h-4/12 w-14 items-center justify-center md:ml-1">
          <h1 className="text-[#878a86] text-1xl md:text-3xl font-bold">SET</h1>
        </div>
        <div className="h-[3px] md:h-1 w-16 bg-[#4db4d7]"></div>
        <div className="flex h-4/12 w-14 items-center justify-center md:ml-1">
        <h1 className="text-[#878a86] text-1xl md:text-2xl">
            2023
        </h1>
        </div>
      </div>
    </>
  );
};
