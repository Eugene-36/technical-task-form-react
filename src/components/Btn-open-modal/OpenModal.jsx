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
                <label htmlFor='company'>Company: </label>
                <input
                  type='text'
                  id='company'
                  autoComplete='off'
                  name='company'
                  {...register('company', { required: true })}
                />
                <small></small>
              </li>

              <li>
                <label htmlFor='name'>Name: </label>
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
                <div style={{ height: 40, color: 'red' }}>
                  {errors?.name && (
                    <span>{errors?.name?.message || 'Error!'}</span>
                  )}
                </div>
              </li>
              <li>
                <label htmlFor='additional'>Additional: </label>
                <input
                  type='text'
                  id='additional'
                  autoComplete='off'
                  name='additional'
                  {...register('additional')}
                />
                <small></small>
              </li>
              <li>
                <label htmlFor='street'>Street: </label>
                <input
                  type='text'
                  id='street'
                  autoComplete='off'
                  name='street'
                  {...register('street')}
                />
                <small></small>
              </li>

              <li>
                <label htmlFor='postalCode'>Postal Code: </label>
                <input
                  type='text'
                  id='postalCode'
                  autoComplete='off'
                  name='postal-code'
                  {...register('postalCode')}
                />
                <small></small>
              </li>

              <li>
                <label htmlFor='country'>Country: </label>
                <input
                  type='text'
                  id='country'
                  autoComplete='off'
                  name='country'
                  {...register('country')}
                />
                <small></small>
              </li>
            </ul>
            <div className='btn-wrapper'>
              <button
                type='submit'
                className='btn shead-btn'
                disabled={!isValid}
              >
                Next step
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OpenModal;
