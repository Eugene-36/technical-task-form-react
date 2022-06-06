import React from 'react';
import style from './second.module.css';
import { useForm } from 'react-hook-form';

import { useActions } from '../../custom-hooks/useActions';

//? MobX
import toggleValue from '../../mobX/store/toggleValue';
import { observer } from 'mobx-react-lite';

const SecondModal = observer(({ formData, setFormData, prev, next }) => {
  const { toggleValueState } = useActions();

  // For redux
  const closeSecondModal = (value) => {
    toggleValueState(value);
  };
  const {
    register: register2,
    formState: { errors: errors2, isValid: isValid2 },
  } = useForm({
    mode: 'onBlur',
  });

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
                    pattern: {
                      value: /^[A-Z]{2}(?:[ ]?[0-9]){18,20}$/i,
                      message: 'invalid IBAN',
                    },
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
                    pattern: {
                      value:
                        /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/,
                      message: 'invalid BIC',
                    },
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
            onClick={() => {
              toggleValue.changeToggleValue(false);
              //closeSecondModal(false)
            }}
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
            onClick={() => next()}
            className={style.next}
            disabled={!isValid2}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
});

export default SecondModal;
