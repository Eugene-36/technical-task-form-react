import React from 'react';
import style from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

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
  return (
    <div className={style.wrapper}>
      <table>
        <tbody>
          <tr className={style.head}>
            <th>Тут будет картинка</th>
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
          {data.map(
            (
              {
                company,
                name,
                Additional,
                Street,
                PostalCode,
                Country,
                IBAN,
                BIC,
                BankName,
                Fax,
                Email,
                Birthday,
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
                  <td>{Additional}</td>
                  <td>{Street}</td>
                  <td>{PostalCode}</td>
                  <td>{Country}</td>
                  <td>{IBAN}</td>
                  <td>{BIC}</td>
                  <td>{BankName}</td>
                  <td>{Fax}</td>
                  <td>{Email}</td>
                  <td>{Birthday}</td>
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
