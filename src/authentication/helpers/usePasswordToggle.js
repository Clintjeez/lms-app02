import React, { useState } from "react";
import eye from "../assets/eye.svg";
import eyeclosed from "../assets/eyeclosed.svg";

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = (
    <img
      className="icon-switch"
      alt=""
      src={visible ? eye : eyeclosed}
      onClick={() => setVisibility((visibility) => !visibility)}
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;
