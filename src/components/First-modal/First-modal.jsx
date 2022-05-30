import React from 'react';
import { useDispatch } from 'react-redux';
import style from './first-modal.module.css';

import { useForm } from 'react-hook-form';
import { toggleValueState } from '../../store/toggleReducer';

const FirstModal = ({ formData, setFormData, next }) => {
  const dispatch = useDispatch();
  const randomString = Math.random().toString(36).slice(2);

  //? Отправка данных для первой формы
  function getValuesFirstForm(data) {
    console.log('sbmit');
    // reset();
  }

  //? For first form
  const {
    register,
    formState: { errors, isValid },
    getValues: forFirstForm,
    reset,
  } = useForm({ mode: 'onBlur' });

  const toggleState = (value) => {
    dispatch(toggleValueState(value));
  };

  const addRandomId = (id) => {
    setFormData({
      ...formData,
      id: id,
    });

    console.log('id', id);
  };
  return (
    <div>
      <h2 className={style.invoiceAddressText}>Invoice Address</h2>
      <div className='first-form'>
        <ul className='list initial-form'>
          <li>
            <label htmlFor='company'>
              Company*
              <div className={style.wrapperInputTextError}>
                <input
                  type='company'
                  id='company'
                  autoComplete='off'
                  name='company'
                  {...register('company', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[A-Zа-я]{2,}$/i,
                      message:
                        'Field may contain only letters and not be less than 2 letters',
                    },
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, company: e.target.value });
                  }}
                />
                {errors?.company && (
                  <p className={style.errorText}>
                    {errors?.company?.message || 'Error!'}
                  </p>
                )}
              </div>
            </label>
          </li>

          <li>
            <label htmlFor='name'>
              Name*
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='name'
                  data-email
                  autoComplete='off'
                  name='username'
                  {...register('name', {
                    required: 'This field is required',
                    minLength: {
                      value: 5,
                      message: 'Min Length for this field is 5',
                    },
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                <div>
                  {errors?.name && (
                    <p className={style.errorText}>
                      {errors?.name?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor='additional'>
              Additional
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='additional'
                  autoComplete='off'
                  name='additional'
                  {...register('additional', {
                    pattern: {
                      value: /^[A-Zа-я]{2,}$/i,
                      message: 'Field may contain only letters',
                    },
                  })}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      additional: e.target.value,
                    });
                  }}
                />

                <div>
                  {errors?.additional && (
                    <p className={style.errorText}>
                      {errors?.additional?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor='street'>
              Street
              <input
                type='text'
                id='street'
                autoComplete='off'
                name='street'
                {...register('street')}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    street: e.target.value,
                  });
                }}
              />
            </label>

            <small></small>
          </li>

          <li>
            <label htmlFor='postalCode'>
              Postal Code
              <input
                type='text'
                id='postalCode'
                autoComplete='off'
                name='postal-code'
                {...register('postalCode')}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    postal: e.target.value,
                  });
                }}
              />{' '}
            </label>

            <small></small>
          </li>

          <li>
            <label htmlFor='country'>
              Country
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='country'
                  autoComplete='off'
                  name='country'
                  {...register('country', {
                    pattern: {
                      value: /^[A-Zа-я]{2,}$/i,
                      message: 'Field may contain only letters',
                    },
                  })}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      country: e.target.value,
                    });
                  }}
                />
                <div>
                  {errors?.country && (
                    <p className={style.errorText}>
                      {errors?.country?.message || 'Error!'}
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
              toggleState(false);
            }}
          >
            Cancel
          </button>

          <button
            type='btn'
            onClick={() => {
              next();
              addRandomId(randomString);
            }}
            className={style.next}
            disabled={!isValid}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstModal;
