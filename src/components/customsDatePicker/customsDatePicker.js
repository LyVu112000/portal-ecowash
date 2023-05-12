import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";
import FloatLabel from "../floatLabel/floatLabel";
registerLocale("vi", vi);
export default function CustomsDatePicker({
  value = null,
  label,
  name,
  onChange,
}) {
  return (
    <div>
      <FloatLabel label={label} name={name} value={value}></FloatLabel>
    </div>
  );
}
