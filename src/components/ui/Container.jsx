import styled from 'styled-components';
import { media } from '../../styles/theme';

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme, $wide }) => ($wide ? '1440px' : theme.maxWidth)};
  margin: 0 auto;
  padding: 0 24px;

  ${media.sm} {
    padding: 0 18px;
  }
`;

export default Container;
