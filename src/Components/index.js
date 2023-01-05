import React, { useState } from "react";
import "./index.css";
import { data } from "../Constants/data";
const Assignment = () => {
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);
  const [price4, setPrice4] = useState(0);
  const [price5, setPrice5] = useState(0);

  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);

  const [indexNum, setIndexNum] = useState();
  const [quantity, setQuantity] = useState(0);

  const onchangeFun = (e, index, qty) => {
    if (index + 1 === 1) {
      setPrice1(e.target.value);
      setTotal1(e.target.value * qty);
    } else if (index + 1 === 2) {
      setPrice2(e.target.value);
      setTotal2(e.target.value * qty);
    } else if (index + 1 === 3) {
      setPrice3(e.target.value);
      setTotal3(e.target.value * qty);
    } else if (index + 1 === 4) {
      setPrice4(e.target.value);
      setTotal4(e.target.value * qty);
    } else if (index + 1 === 5) {
      setPrice5(e.target.value);
      setTotal5(e.target.value * qty);
    }
    // setQuantity(item?.qty);
  };
  return (
    <div className="container">
      <div>
        <table>
          <tr>
            <th>Sr No.</th>
            <th>NAME OF MATERIAL</th>
            <th>PRICE</th>
            <th>UOM</th>
            <th>QTY</th>
            <th>Total</th>
          </tr>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>
                  <input
                    type="text"
                    className="input-style"
                    placeholder="enter Price..."
                    onChange={(e) => onchangeFun(e, index, item?.qty)}
                  />
                </td>
                <td>{item?.uom}</td>
                <td>{item?.qty}</td>
                <td>
                  {index + 1 === 1
                    ? price1 * item?.qty
                    : index + 1 === 2
                    ? price2 * item?.qty
                    : index + 1 === 3
                    ? price3 * item?.qty
                    : index + 1 === 4
                    ? price4 * item?.qty
                    : index + 1 === 5
                    ? price5 * item?.qty
                    : 0}
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total1 + total2 + total3 + total4 + total5}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Assignment;