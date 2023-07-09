import React from 'react'

const Details = ({data}) => {

    console.log({data})
  return (
    <main className="w-full h-auto px-4 flex justify-center">
    {/* <div className="max-w-full md:max-w-lg w-full text-gray-600 px-4 md:p-8 rounded-md md:shadow-lg bg-white md:border-2">
      <div className="text-center">
        <div className="mt-5 space-y-2">
          <h3 className="text-gray-600 text-2xl font-semibold">
            {pageTitle}
          </h3>
        </div>
      </div>
      <form className="mt-8 space-y-5">
        <div>
          <label className="font-medium">{productName}</label>
          <input
            type="text"
            value={data?.name}
            disabled
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{productCode}</label>
          <input
            type="text"
            value={data?.slug}
            disabled
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{productUnit}</label>
          <input
            type="text"
            value={data?.unit ?? "-"}
            disabled
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{date}</label>
          <input
            type="date"
            value={new Date(data?.createdAt).toISOString().split("T")[0]}
            disabled
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg"
          />
        </div>
        <div>
          <label className="font-medium">{productDetails}</label>
          <textarea
            rows={5}
            disabled
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary-600 shadow-sm rounded-lg">{data?.details}</textarea>
        </div>
      </form>
    </div> */}
  </main>
  )
}

export default Details