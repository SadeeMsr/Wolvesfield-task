import { useState } from 'react';
import tabItems from '../../assets/tabs.json'

export default function TabBar({handleDisplayPackages}) {
 const [itemActive, setItemActive] = useState("")

 function handleClick(item, index) {
  setItemActive(item)
  handleDisplayPackages(index)
 }

  return (
    <ul className="flex flex-col lg:flex-row justify-between items-center h-auto lg:h-20">
      {tabItems.map((item, idx)=>
        <li className={`cursor-pointer py-1 text-md hover:border-b hover:border-sky-400 ${itemActive===item && 'font-semibold'}`} onClick={()=> handleClick(item, idx)} key={idx}>{item}</li>
      )}
    </ul>
  );
}
