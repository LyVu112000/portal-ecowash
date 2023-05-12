import { useState } from "react";

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass = () => {
    let className = "";
    if (focus || value) {
      className = "label ";
    } else {
      className = "label label-float";
    }
    return className;
  };
  // const labelClass =
  //   focus || (value && value.length !== 0) ? "label label-float" : "label";

  return (
    <div
      className="float-label w-100"
      onBlur={() => {
        setFocus(false);
      }}
      onFocus={() => {
        setFocus(true);
      }}
    >
      {children}
      <label className={labelClass()}>{label}</label>
    </div>
  );
};

export default FloatLabel;
