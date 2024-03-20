import { ChangeEvent, useState } from "react";
import { PaymentType, getAllPayments } from "../../data/DataFunction";
import PaymentTableRow from "./PaymentTableRow";

export  default function Transactions(){
    const payments:PaymentType[] = getAllPayments();
    const countries= Array.from(new Set(payments.map(payment=>payment.country)));

    console.log(countries);

    const [selectedCountry, setSelectCountry] = useState<string>(countries[0]);
    const changeCountry=(e:ChangeEvent<HTMLSelectElement>)=>{
        setSelectCountry(e.target.value);
    }
    return (
    <>
         <div className="countrySelector">

    <select onChange={changeCountry}>
      {countries.map(country=> <option value={country} key={country}>{country}</option>)}
    </select>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>OrderId</th>
          <th>Country</th>
          <th>Currency</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
          {payments.filter(payment=> payment.country===selectedCountry).map((payment, index) => <PaymentTableRow key={index} {...payment}></PaymentTableRow>)}
        </tbody>

      </table>
      </>);
}
