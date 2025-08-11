import { useState } from 'react';
import MenuList from './MenuList';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  return (
    <li>
      <div
        onClick={() => handleToggleChildren(item.label)}
        className="menu-item"
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span>
            {displayCurrentChildren[item.label] ? (
              <FaMinus olor="#fff" size={10} />
            ) : (
              <FaPlus olor="#fff" size={10} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
