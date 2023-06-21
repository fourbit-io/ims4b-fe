import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

const Item = ({ item }) => {

    const router = useRouter();
    const query = router;
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className={` ${
        query?.pathname === item?.url
          ? 'border-r-4 border-primary  text-primary'
          : ''
      } cursor-pointer ${
        query?.pathname === item?.url ? 'pl-3 lg:pl-7' : 'pl-4 lg:pl-8'
      } py-3  text-sm lg:text-base`}
    >
      <div
        onClick={() => setDropdown(!dropdown)}
        className="flex items-center justify-between "
      >
        <div className="flex items-center space-x-4 lg:space-x-5">
          {item?.icon} <span className="flex-1">{item?.name}</span>{' '}
        </div>
      </div>
    </div>
  );
};

export default Item;
