import React from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const TableFrame = () => {
  const data = [
    {
      company: 'Apple',
      name: 'Eugene',
      Additional: 'Good qual',
      Street: 'Ken-325/7',
      PostalCode: '15244',
      Country: 'USA',
      IBAN: '41525141845',
      BIC: '552956d',
      BankName: 'Alfa',
      Fax: '745ss758',
      Email: 'dort@s.com',
      Birthday: '08.09.2019',
    },
    {
      company: 'Apple',
      name: 'Eugene',
      Additional: 'Good qual',
      Street: 'Ken-325/7',
      PostalCode: '15244',
      Country: 'USA',
      IBAN: '41525141845',
      BIC: '552956d',
      BankName: 'Alfa',
      Fax: '745ss758',
      Email: 'dort@s.com',
      Birthday: '08.09.2019',
    },
    {
      company: 'Apple',
      name: 'Eugene',
      Additional: 'Good qual',
      Street: 'Ken-325/7',
      PostalCode: '15244',
      Country: 'USA',
      IBAN: '41525141845',
      BIC: '552956d',
      BankName: 'Alfa',
      Fax: '745ss758',
      Email: 'dort@s.com',
      Birthday: '08.09.2019',
    },
  ];

  const personalInfo = useSelector((state) => state.user.data);

  console.log('personalInfo', personalInfo);
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
          {<span>You do not have data inserted</span> &&
            personalInfo.map(
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
                },
                key
              ) => {
                return (
                  <tr key={key}>
                    <td>
                      <FontAwesomeIcon
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
            )}
        </tbody>
      </table>
    </div>
  );
};

export default TableFrame;
