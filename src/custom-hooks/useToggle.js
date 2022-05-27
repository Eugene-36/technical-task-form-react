import React, { useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState();

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }

  return [value, toggleValue];
};

export default useToggle;
