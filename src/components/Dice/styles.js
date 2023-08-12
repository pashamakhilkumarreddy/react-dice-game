import styled from 'styled-components';

const DiceWrapper = styled.div.withConfig({
  displayName: 'DiceWrapper',
})`
  ${({ disabled }) => disabled && `cursor: not-allowed;`}
  > div {
    ${({ disabled }) => disabled && `pointer-events: none; `}
  }
`;

export { DiceWrapper };
