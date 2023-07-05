const Table = ({ tableHeaders, tableItems, tableColumns, getActions }) => {
  return (
    <div className="mt-12 relative h-max overflow-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            {tableHeaders?.map((item, idx) => (
              <th className="py-3 pr-6" key={idx}>
                {item}
              </th>
            ))}
            <th className="py-3 pr-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {tableItems?.map((item, idx) => (
            <tr key={idx}>
              {tableColumns?.map((colItem, colIdx) => (
                colItem !== "actions" ?
                <td className="pr-6 py-4 whitespace-nowrap text-ellipsis max-w-[100px] overflow-hidden" key={colIdx}>
                  {item[colItem]}
                </td>
                :
                <td key={colIdx}>
                {getActions?.(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
