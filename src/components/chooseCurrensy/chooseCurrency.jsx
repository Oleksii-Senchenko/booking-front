import React, { useEffect } from "react";
import { Currency, SelectWrapper, Select, Option, DropdownArrow, Item } from "./chooseCurrency.styled";
import { getCurrency } from "../../redux/user/userOperation";
import { useDispatch, useSelector } from "react-redux";

const ChooseCurrency = () => {
  const dispatch = useDispatch();
  const currencyes = useSelector(state => state.user.currency);

  useEffect(() => {
    if (!currencyes) {
      dispatch(getCurrency('USD'));
    }
  }, [dispatch, currencyes]);

  if (!currencyes) {
    return null; 
  }

  return (
    <Currency>
      <SelectWrapper>
        <Select>
          {Object.keys(currencyes).map(curr => (
            <Option key={curr}>{curr}</Option>
          ))}
        </Select>
      </SelectWrapper>
    </Currency>
  );
};

export default ChooseCurrency;
