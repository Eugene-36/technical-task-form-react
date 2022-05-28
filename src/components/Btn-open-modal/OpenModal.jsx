import React, { useState } from 'react';
import style from './open-modal.module.css';
import Modal from 'react-modal';
import useToggle from '../../custom-hooks/useToggle';
import { useForm } from 'react-hook-form';

const OpenModal = () => {
  const [value, toggleValue] = useToggle(false);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    additional: '',
    street: '',
    postal: '',
    country: '',
    iban: '',
    bic: '',
    bank: '',
    fax: '',
    email: '',
    birthday: '',
    homepage: '',
  });

  //? For first form
  const {
    register,
    formState: { errors, isValid },
    getValues: forFirstForm,
    reset,
  } = useForm({ mode: 'onBlur' });

  //? For second form
  const {
    register: register2,
    formState: { errors: errors2, isValid: isValid2 },
    getValues: forSecondForm,
    reset: reset2,
  } = useForm({
    mode: 'onBlur',
  });
  //? For third form
  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
    reset: reset3,
  } = useForm({
    mode: 'onBlur',
  });
  //? Отправка данных для первой формы
  function getValuesFirstForm(data) {
    console.log('getValues', data());
    console.log('sbmit');
    reset();
  }

  //? Отправка данных для второй формы
  function getValuesFromSecondForm(data) {
    console.log('secondForm', data());
    reset2();
  }
  //? Отправка данных для третьей формы
  function onSubmitThirdForm(data) {
    console.log('onSubmitThirdForm', data);

    reset3();
    console.log('formData', formData);
  }

  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };

  const formSteps = () => {
    switch (step) {
      case 1:
        return (
          <form>
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
                  onClick={() => toggleValue(false)}
                >
                  Cancel
                </button>

                <button
                  type='btn'
                  onClick={() => {
                    next();

                    getValuesFirstForm(forFirstForm);
                  }}
                  className={style.next}
                  disabled={!isValid}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        );
      case 2:
        return (
          <form>
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
                  onClick={() => toggleValue(false)}
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
                    getValuesFromSecondForm(forSecondForm);
                  }}
                  className={style.next}
                  disabled={!isValid2}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleSubmit3(onSubmitThirdForm)}>
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
                        type='text'
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
                  onClick={() => toggleValue(false)}
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
                <button type='submit' className={style.next}>
                  Save
                </button>
              </div>
            </div>
          </form>
        );

      default:
        break;
    }
  };

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
        <div
          className={style.closeModal}
          onClick={() => toggleValue(false)}
        ></div>

        {/* ======Первая форма======== */}
        {formSteps()}
        {/* ======Вторая форма======== */}

        {/* ======Третья форма======== */}
      </Modal>
    </div>
  );
};

export default OpenModal;
