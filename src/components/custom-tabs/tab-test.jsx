import Tabs from './tabs';
import './tabs.css';

function RandomComponent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: 'Tab1',
      content: <div>This is content for Tab1</div>,
    },
    {
      label: 'Tab2',
      content: <div>This is content for Tab2</div>,
    },
    {
      label: 'Tab3',
      content: <div>This is content for Tab3</div>,
    },
    {
      label: 'Tab4',
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
