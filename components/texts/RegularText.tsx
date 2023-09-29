import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { ITextProps } from "../../interface";

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.gray};
  text-align: left;
  font-family: Lato-Bold;
`;

export const RegularText: FunctionComponent<ITextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};
