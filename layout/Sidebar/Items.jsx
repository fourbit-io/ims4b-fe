import React from 'react'
import Item from './Item'
import styles from '../DashboardLayout.module.css';

const Items = ({items}) => {
  return (
    <div
      className={`${styles.dashboard__items__wrapper} h-[100vh] w-full space-y-2 overflow-y-scroll pt-5 text-gray-600`}
    >
      {items?.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  )
}

export default Items