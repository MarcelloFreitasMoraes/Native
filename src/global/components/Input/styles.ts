import styled from "styled-components/native";
import { TextInput } from "react-native";
import theme from "../../../styles/theme"

export const InputComponent = styled(TextInput)`
  border-radius: 8px;
  border: 1px solid ${theme.colors.dividers};
  padding: 10px 8px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  /* 
  font-size: 14px;
  font-family: ${theme.fonts.fontFamily.bold}; */
`;
