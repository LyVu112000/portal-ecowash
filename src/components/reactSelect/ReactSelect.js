import React from "react";
import Select from 'react-select'

const ReactSelect = ({options, value, onChange, onInputChange, loading, placeholder}) => {
  return (
    <Select
      isClearable
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
      isLoading={loading}
    />
  );
};

export default ReactSelect;
