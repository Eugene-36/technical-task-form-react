export const options = [
  { value: 'United States', label: 'United States' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'Japan', label: 'Canada' },
  { value: 'China', label: 'China' },
  { value: 'Italy', label: 'Italy' },
];

// Стили для Селекта
export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '0.25px solid #6b7074;',
    cursor: 'pointer',
    fontSize: '13px',
    minHeight: '29px',

    background: 'white',
    height: '10px',
  }),
  indicatorSeparator: (styles) => ({ display: 'none' }),
  dropdownIndicator: (styles) => ({
    padding: '0px',
    color: '#6B7074',
    paddingBottom: '20px',
  }),
  valueContainer: () => ({ padding: '0px', paddingTop: '5px' }),
  IndicatorSeparator: () => null,
};
