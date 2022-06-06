import React from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useActions } from '../../custom-hooks/useActions';

//? MobX
import addDeleteInfo from '../../mobX/store/addDeleteInfo';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const TableFrame = observer(() => {
  // For Redux
  const personalInfo = useSelector((state) => state.user.data);
  const { deletePrivatInfo } = useActions();

  const deleteUserInfo = (id) => {
    // deletePrivatInfo(id);
    addDeleteInfo.removePersonalInfo(id);
  };

  return (
    <div className={style.wrapper}>
      <table>
        <tbody>
          <tr className={style.head}>
            <th className={style.deleteColumn}></th>
            <th>Company</th>
            <th>Name</th>
            <th>Additional</th>
            <th>Street</th>
            <th>Postal Code</th>
            <th>Country</th>
            <th>IBAN</th>
            <th>BIC</th>
            <th>Bank name</th>
            <th>Fax</th>
            <th>E-mail</th>
            <th>Birthday</th>
          </tr>
          {toJS(addDeleteInfo.data).length === 0 ? (
            <tr className={style.message}>
              <td>You do not have data inserted</td>
            </tr>
          ) : (
            toJS(addDeleteInfo.data).map(
              (
                {
                  company,
                  name,
                  additional,
                  street,
                  postal,
                  country,
                  iban,
                  bic,
                  bank,
                  fax,
                  email,
                  birthday,
                  id,
                },
                key
              ) => {
                return (
                  <tr key={key}>
                    <td>
                      <FontAwesomeIcon
                        onClick={() => deleteUserInfo(id)}
                        icon={faTrashCan}
                        className={style.highlight}
                      />
                    </td>
                    <td>{company}</td>
                    <td>{name}</td>
                    <td>{additional}</td>
                    <td>{street}</td>
                    <td>{postal}</td>
                    <td>{country}</td>
                    <td>{iban}</td>
                    <td>{bic}</td>
                    <td>{bank}</td>
                    <td>{fax}</td>
                    <td>{email}</td>
                    <td>{birthday}</td>
                  </tr>
                );
              }
            )
          )}
        </tbody>
      </table>
    </div>
  );
});

export default TableFrame;
