import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { RegularText } from "../texts";
import { IButtonProps } from "../../interface";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

export const RegularButton: FunctionComponent<IButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};
