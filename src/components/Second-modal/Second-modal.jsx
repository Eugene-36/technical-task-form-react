import React from 'react';
import style from './second.module.css';
import { useForm } from 'react-hook-form';

import { toggleValueState } from '../../store/toggleReducer';
import { useDispatch } from 'react-redux';

const SecondModal = ({ formData, setFormData, prev, next }) => {
  const dispatch = useDispatch();

  const closeSecondModal = (value) => {
    dispatch(toggleValueState(value));
  };
  const {
    register: register2,
    formState: { errors: errors2, isValid: isValid2 },
    getValues: forSecondForm,
    reset: reset2,
  } = useForm({
    mode: 'onBlur',
  });

  function getValuesFromSecondForm(data) {
    reset2();
  }

  return (
    <div>
      <h2 className={style.invoiceAddressText}>Bank Data</h2>
      <div className='first-form'>
        <ul className='list initial-form'>
          <li>
            <label htmlFor='iban'>
              IBAN*
              <div className={style.wrapperInputTextError}>
                <input
                  type='sometype'
                  id='iban'
                  autoComplete='off'
                  name='iban'
                  {...register2('iban', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, iban: e.target.value });
                  }}
                />
                {errors2?.iban && (
                  <p className={style.errorText}>
                    {errors2?.iban?.message || 'Error!'}
                  </p>
                )}
              </div>
            </label>
          </li>

          <li>
            <label htmlFor='bic'>
              BIC*
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='bic'
                  data-email
                  autoComplete='off'
                  name='bic'
                  {...register2('bic', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, bic: e.target.value });
                  }}
                />
                <div>
                  {errors2?.bic && (
                    <p className={style.errorText}>
                      {errors2?.bic?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor='bankName'>
              Bank name*
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='bankName'
                  autoComplete='off'
                  name='bankName'
                  {...register2('bankName', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, bank: e.target.value });
                  }}
                />

                <div>
                  {errors2?.bankName && (
                    <p className={style.errorText}>
                      {errors2?.bankName?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </label>
          </li>
        </ul>
        <div className={style.btnWrapper}>
          <button
            type='button'
            className={[style['btn']].join(' ')}
            onClick={() => closeSecondModal(false)}
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={prev}
            className={[style['btn']].join(' ')}
          >
            Previous
          </button>
          <button
            type='button'
            onClick={() => {
              next();
              getValuesFromSecondForm();
            }}
            className={style.next}
            disabled={!isValid2}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
