import React, { useState } from "react";

import {
  InputContainer,
  Icon,
  H5Form,
  InputBox,
  StyledInput,
  StyledForm,
} from "./style";

const StylezedInput = ({ icon, name, label, type, rules }) => {
  const [focusActive, setFocusActive] = useState(false);

  return (
    <InputContainer
      focusActive={focusActive}
      onFocus={() => setFocusActive(true)}
      onBlur={(e) => e.target.value === "" && setFocusActive(false)}
    >
      <boxIcon>
        <Icon focusActive={focusActive} className={icon}></Icon>
      </boxIcon>
      <InputBox>
        <H5Form focusActive={focusActive}>{label}</H5Form>
        <StyledForm.Item name={name} rules={rules}>
          <StyledInput type={type} />
        </StyledForm.Item>
      </InputBox>
    </InputContainer>
  );
};

export default StylezedInput;
