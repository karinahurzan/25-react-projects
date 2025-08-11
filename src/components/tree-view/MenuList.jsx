import MenuItem from './MenuItem';
import { v4 as uuidv4 } from 'uuid';

export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map(listItem => <MenuItem key={uuidv4()} item={listItem} />)
        : null}
    </ul>
  );
}
