import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './open-modal.module.css';
import Modal from 'react-modal';

import SecondModal from '../Second-modal/Second-modal.jsx';
import FirstModal from '../First-modal/First-modal';
import ThirdModal from '../Third-modal/Third-modal.jsx';
import { openModal } from '../../store/toggleReducer';

const OpenModal = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const updateStateValue = (value) => {
    dispatch(openModal(value));
  };
  const closeModal = useSelector((state) => state.modal.modal);

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
          <FirstModal
            formData={formData}
            setFormData={setFormData}
            next={next}
            toggleValue={false}
          />
        );
      case 2:
        return (
          <SecondModal
            formData={formData}
            setFormData={setFormData}
            prev={prev}
            next={next}
          />
        );

      case 3:
        return (
          <ThirdModal
            formData={formData}
            setFormData={setFormData}
            prev={prev}
          />
        );

      default:
        break;
    }
  };
  console.log('closeModal', closeModal);
  return (
    <div>
      <button onClick={() => updateStateValue(true)} className={style.addBtn}>
        Add
      </button>
      <Modal
        isOpen={closeModal}
        onRequestClose={() => closeModal}
        className={style.positionModal}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <div
          className={style.closeModal}
          onClick={() => updateStateValue(false)}
        ></div>
        {/*! НАДО ЗДЕСЬ ПОПРОБОВАТЬ СДЕЛАТЬ ОДИН ОБЩИЙ HANDLESUBMIT */}
        {/* =========Открытие и шаги основной формы ============ */}
        <form action=''>{formSteps()}</form>

        {/* ========= ============ */}
      </Modal>
    </div>
  );
};

export default OpenModal;
