import styled from "styled-components/native";
import { Image, TextInput } from "react-native";
import theme from "../../styles/theme";

export const ComeBack = styled.View`
  width: 90%;
  padding: 0 20px;
  gap: 10px; 
   align-items: center;
`;

export const LogoContent = styled.View`
  width: 265px;
  height: 215px;
  margin-bottom: 20px;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 100%; 
`;

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

// export const Container = styled.View`
//   padding-left: 10px;
//   padding-right: 10px;
//   padding-top: 20px;
// `;

// export const HeaderButtons = styled.View`
//   flex-direction: row;
//   justify-content: space-around;
// `;

// export const Info = styled.View`
//   align-items: center;

//   margin-top: 20px;
//   margin-bottom: 20px;
// `;

// export const Username = styled.Text`
//   font-family: ${theme.fonts.fontFamily.bold};
//   color: ${theme.colors.blue};
// `;

// export const Name = styled.Text`
//   font-family: ${theme.fonts.fontFamily.regular};
//   color: ${theme.colors.grey};
// `;

// export const HeaderInfo = styled.View`
//   margin-top: 20px;
//   margin-bottom: 20px;
//   margin-left: auto;
//   margin-right: auto;

//   align-items: center;
// `;

// export const GroupName = styled.View`
//   flex-direction: row;
// `;

// export const TitleInfo = styled.Text`
//   color: ${theme.colors.blue};

//   font-family: ${theme.fonts.fontFamily.bold};
// `;

// export const NameInfo = styled.Text`
//   color: ${theme.colors.grey};
// `;

// export const DescriptionInfo = styled.View`
//   margin-bottom: 20px;

//   flex-direction: column;
//   align-items: center;
// `;
