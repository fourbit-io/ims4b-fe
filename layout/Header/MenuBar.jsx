import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';



const MenuBar= ({ active, setActive }) => {
  return (
    <div className="flex items-center space-x-2">
      {!active ? (
        <GiHamburgerMenu
          onClick={() => setActive(true)}
          className="ml-3 block cursor-pointer text-[20px] lg:hidden"
        />
      ) : (
        <GrFormClose
          onClick={() => setActive(false)}
          className="ml-3 block cursor-pointer text-[30px] lg:hidden"
        />
      )}
    </div>
  );
};

export default MenuBar;
