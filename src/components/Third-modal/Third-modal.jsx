import React from 'react';
import { useForm } from 'react-hook-form';
import style from './third.module.css';
import { useDispatch } from 'react-redux';
import { toggleValueState } from '../../store/toggleReducer';
import { addPrivatInfo } from '../../store/actions';

const ThirdModal = ({ formData, setFormData, prev, step, setStep }) => {
  const dispatch = useDispatch();

  //? For third form
  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
    reset: reset3,
  } = useForm({
    mode: 'onBlur',
  });

  const closeThirdForm = (value) => {
    dispatch(toggleValueState(value));
    // reset3();
  };
  const turnBackToIninitalForm = (numb) => {
    setStep(numb);
  };

  const showAllData = (allData) => {
    dispatch(addPrivatInfo(allData));
    reset3();
  };

  return (
    <div>
      <h2 className={style.invoiceAddressText}>Contact</h2>
      <div className='first-form'>
        <ul className='list initial-form'>
          <li>
            <label htmlFor='fax'>
              Fax
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='fax'
                  autoComplete='off'
                  name='fax'
                  {...register3('fax', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, fax: e.target.value });
                  }}
                />
                {errors3?.fax && (
                  <p className={style.errorText}>
                    {errors3?.fax?.message || 'Error!'}
                  </p>
                )}
              </div>
            </label>
          </li>

          <li>
            <label htmlFor='email'>
              E-mail
              <div className={style.wrapperInputTextError}>
                <input
                  type='email'
                  id='email'
                  data-email
                  autoComplete='off'
                  name='email'
                  {...register3('email', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                />
                <div>
                  {errors3?.email && (
                    <p className={style.errorText}>
                      {errors3?.email?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor='birthday'>
              Birthday
              <div className={style.wrapperInputTextError}>
                <input
                  type='date'
                  id='birthday'
                  autoComplete='off'
                  name='birthday'
                  {...register3('birthday', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      birthday: e.target.value,
                    });
                  }}
                />

                <div>
                  {errors3?.birthday && (
                    <p className={style.errorText}>
                      {errors3?.birthday?.message || 'Error!'}
                    </p>
                  )}
                </div>
              </div>
            </label>
          </li>
          <li>
            <label htmlFor='homepage'>
              Homepage
              <div className={style.wrapperInputTextError}>
                <input
                  type='text'
                  id='homepage'
                  autoComplete='off'
                  name='homepage'
                  {...register3('homepage', {
                    required: 'This field is required',
                  })}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      homepage: e.target.value,
                    });
                  }}
                />

                <div>
                  {errors3?.homepage && (
                    <p className={style.errorText}>
                      {errors3?.homepage?.message || 'Error!'}
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
            onClick={() => closeThirdForm(false)}
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
            onClick={() => {
              showAllData(formData);
              closeThirdForm(false);
              turnBackToIninitalForm(1);
            }}
            type='button'
            className={style.next}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdModal;
