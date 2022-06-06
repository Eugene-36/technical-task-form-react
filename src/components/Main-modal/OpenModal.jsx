import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './open-modal.module.css';
import Modal from 'react-modal';

import SecondModal from '../Second-modal/Second-modal.jsx';
import FirstModal from '../First-modal/First-modal';
import ThirdModal from '../Third-modal/Third-modal.jsx';

import { useActions } from '../../custom-hooks/useActions';

//? MobX
import toggleValue from '../../mobX/store/toggleValue';
import { observer } from 'mobx-react-lite';

const OpenModal = observer(() => {
  const [step, setStep] = useState(1);

  const { openModal } = useActions();

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
    id: '',
  });

  // For Redux
  const updateStateValue = (value) => {
    openModal(value);
  };
  const closeModal = useSelector((state) => state.modal.modal);
  // For Redux
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
            step={step}
            setStep={setStep}
          />
        );

      default:
        break;
    }
  };

  return (
    <div>
      <button
        onClick={() => toggleValue.changeToggleValue(true)}
        className={style.addBtn}
      >
        Add
      </button>
      <Modal
        isOpen={toggleValue.statment}
        onRequestClose={() => toggleValue.changeToggleValue(false)}
        className={style.positionModal}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <div
          className={style.closeModal}
          onClick={() => toggleValue.changeToggleValue(false)}
        ></div>
        {/* =========Открытие и шаги основной формы ============ */}
        <form>{formSteps()}</form>

        {/* ========= ============ */}
      </Modal>
    </div>
  );
});

export default OpenModal;
