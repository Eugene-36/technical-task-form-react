import React, { useState } from 'react';
import style from './open-modal.module.css';
import Modal from 'react-modal';
import useToggle from '../../custom-hooks/useToggle';
import { useForm } from 'react-hook-form';

const OpenModal = () => {
  const [value, toggleValue] = useToggle(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' });

  function onSubmit(data) {
    console.log('data', data);
    reset();
    //{}
  }
  return (
    <div>
      <button onClick={() => toggleValue(true)} className={style.addBtn}>
        Add
      </button>
      <Modal
        isOpen={value}
        onRequestClose={() => toggleValue(false)}
        className={style.positionModal}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <h2>Invoice Address</h2>
        <button onClick={() => toggleValue(false)}>X</button>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='first-form'>
            <ul className='list initial-form'>
              <li>
                <label htmlFor='company'>
                  Company:
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
                  />
                </label>

                <div>
                  {errors?.company && (
                    <span>{errors?.company?.message || 'Error!'}</span>
                  )}
                </div>
              </li>

              <li>
                <label htmlFor='name'>
                  Name:
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
                  />
                </label>

                <div>
                  {errors?.name && (
                    <span>{errors?.name?.message || 'Error!'}</span>
                  )}
                </div>
              </li>
              <li>
                <label htmlFor='additional'>
                  Additional:
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
                  />
                </label>

                <div>
                  {errors?.additional && (
                    <span>{errors?.additional?.message || 'Error!'}</span>
                  )}
                </div>
              </li>
              <li>
                <label htmlFor='street'>
                  Street:
                  <input
                    type='text'
                    id='street'
                    autoComplete='off'
                    name='street'
                    {...register('street')}
                  />{' '}
                </label>

                <small></small>
              </li>

              <li>
                <label htmlFor='postalCode'>
                  Postal Code:
                  <input
                    type='text'
                    id='postalCode'
                    autoComplete='off'
                    name='postal-code'
                    {...register('postalCode')}
                  />{' '}
                </label>

                <small></small>
              </li>

              <li>
                <label htmlFor='country'>
                  Country:
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
                  />{' '}
                </label>

                <div>
                  {errors?.additional && (
                    <span>{errors?.additional?.message || 'Error!'}</span>
                  )}
                </div>
              </li>
            </ul>
            <div className={style.btnWrapper}>
              <button
                type='button'
                className={[style['btn'], style['log-in-box_layout']].join(' ')}
                disabled={!isValid}
              >
                Cancel
              </button>

              <button type='submit' className={style.next} disabled={!isValid}>
                Next
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OpenModal;
