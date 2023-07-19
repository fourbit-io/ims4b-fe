import React, { forwardRef } from "react";

export const Component = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="mt-10 px-2">
      <div className="flex justify-end">
        <p className="border p-3 w-[200px] ">চাহিদা পত্রঃ</p>
      </div>
      <div className="text-center">
        <h1>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h1>
        <h1>কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর</h1>
        <h1>১৯৬, শহীদ সৈয়দ নজরুল ইসলাম সরণি</h1>
        <h1>বিজয়নগর, ঢাকা-১০০০।</h1>
        <br />
        <h1 className="text-[20px] font-bold underline">চাহিদাপত্র</h1>
        <h3>
          বিষয়ঃ{" "}
          <span className="underline underline-offset-2 ">
            দাপ্তরিক কাজে ব্যবহারের জন্য নিম্নেবর্ণিত মালামাল/পণ্য সরবরাহ
            প্রসঙ্গে।
          </span>
        </h3>
      </div>

      <div className=" px-16  my-5">
        <p className="mb-2">
          যে কর্মকর্তা/কর্মচারী অথবা শাখার ব্যবহারের জন্য নাম অথবা
          পদবী……………………………………… এর ব্যবহারের জন্য নিম্নে বর্ণিত মালামালগুলো সরবরাহ
          করার জন্য অনুরোধ করা হলো।
        </p>
        <div className="border-2 text-center">
        <div className="grid grid-cols-4 divide-x-2">
          <h4 className="border-b">ক্রম</h4>
          <h4 className="border-b">মালামালের নাম</h4>
          <h4 className="border-b">সংখ্যা</h4>
          <h4 className="border-b ">মন্তব্য</h4>
        </div>
        <div className="grid grid-cols-4 divide-x-2">
          <p className="p-2">1</p>
          <p className="p-2">Data center popwered by fourbit</p>
          <p className="p-2">43</p>
          <p className="p-2">
            Data center popwered by fourbit
          </p>
        </div>
        <div className="grid grid-cols-4 divide-x-2">
          <p className="p-2">1</p>
          <p className="p-2">Data center popwered by fourbit</p>
          <p className="p-2">43</p>
          <p className="p-2">
            Data center popwered by fourbit
          </p>
        </div>
        </div>
      </div>
    </div>
  );
});
