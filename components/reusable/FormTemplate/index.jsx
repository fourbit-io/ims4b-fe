import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { buttons } from "@/contents/bengali/global";
import { convertNumber, convertDate } from "@/lib";

const FormTemplate = ({ id, activity, userName, items, remark }) => {
  const [releaseDate, setReleaseDate] = useState(null);
  useEffect(() => {
    setReleaseDate(
      activity?.status === "RELEASED" || activity?.status === "DELIVERED"
        ? activity?.createdAt
        : null
    );
  }, [activity]);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="w-a4 mx-auto">
      {/* Printable data  */}

      <div ref={componentRef} className="mt-6 px-2">
        <div className="flex justify-end">
          <p className="border p-3 w-[200px] ">
            চাহিদা পত্রঃ {convertNumber(id)}
          </p>
        </div>
        <div className="text-center">
          <h1>গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h1>
          <h1>কলকারখানা ও প্রতিষ্ঠান পরিদর্শন অধিদপ্তর</h1>
          <h1>১৯৬, শহীদ সৈয়দ নজরুল ইসলাম সরণি</h1>
          <h1>বিজয়নগর, ঢাকা-১০০০।</h1>
          <br />
          <h1 className="text-[20px] font-bold underline">চাহিদা পত্রঃ</h1>
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
            যে কর্মকর্তা/কর্মচারী অথবা শাখার ব্যবহারের জন্য নাম অথবা পদবী{" "}
            {userName} এর ব্যবহারের জন্য নিম্নে বর্ণিত মালামালগুলো সরবরাহ করার
            জন্য অনুরোধ করা হলো।
          </p>

          {/* table data  */}

          <div className="border-2 my-6">
            <div className="grid grid-cols-4 text-center divide-x-2">
              <h4 className="border-b">ক্রম</h4>
              <h4 className="border-b">মালামালের নাম</h4>
              <h4 className="border-b">সংখ্যা</h4>
              <h4 className="border-b ">মন্তব্য</h4>
            </div>
            {items?.map((item, id) => (
              <div
                key={id}
                className="grid grid-cols-4  text-center  divide-x-2">
                <p className="p-2">{convertNumber(id + 1)}</p>
                <p className="p-2">{item?.product?.name}</p>
                <p className="p-2">{convertNumber(item?.quantity)}</p>
                <p className="p-2">{id === 0 && remark}</p>
              </div>
            ))}
          </div>

          {/* table data  */}

          {/* signature data  */}

          <div className="border-2 divide-x-2 grid grid-cols-2">
            <div className="p-2">
              <p className="mb-6">চাহিদাপত্র দাখিলকারীর স্বাক্ষর</p>
              <p>নামঃ {userName}</p>
            </div>
            <div className="p-2">
              <p className="mb-6">সুপারিশকারী কর্মকর্তার স্বাক্ষর</p>
              <p>পদবীঃ</p>
            </div>
          </div>

          {/* signature data  */}

          <div className="my-10">
            <p>উপর্যুক্ত মালামাল বুঝিয়া পাইলাম</p>
            <p className="mb-6">মালামাল গ্রহণকারীর নামঃ</p>
            <p>
              মালামালগুলো{" "}
              {releaseDate ? convertDate(releaseDate) : "................."}{" "}
              তারিখে সরবরাহ করে নিম্নেবর্ণিত রেজিস্টার ও পৃষ্ঠায় লিপিবদ্ধ করা
              হলো।
            </p>
            <p>রেজিস্টার নং………………………………………………………………</p>
            <p>পৃষ্ঠা নং……………………………………………………………………</p>
          </div>
        </div>
      </div>

      {/* Printable data  */}

      <div className="my-10 flex justify-center">
        <button
          className="text-center bg-primary-600 text-white hover:bg-primary-500 rounded-md px-2 py-1"
          onClick={handlePrint}>
          {buttons?.print}
        </button>
      </div>
    </div>
  );
};

export default FormTemplate;
