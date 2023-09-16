import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function SubTabs({ value, handleChange, subTabLabels }) {
  return (
    <Tabs value={value} onChange={handleChange}>
      {subTabLabels.map((label, index) => (
        <Tab key={index} label={label} />
      ))}
    </Tabs>
  );
}

export default SubTabs;