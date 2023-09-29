import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ITextProps } from "../../interface";

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato-Bold;
`;

export const BigText: FunctionComponent<ITextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};
