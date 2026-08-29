import styled, { css } from 'styled-components';

const sizes = {
  md: css`
    padding: 14px 30px;
    font-size: 0.95rem;
  `,
  lg: css`
    padding: 18px 40px;
    font-size: 1.05rem;
  `,
};

const variants = {
  primary: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.cactusLight}, ${({ theme }) => theme.colors.cactus});
    color: ${({ theme }) => theme.colors.charcoal};
    box-shadow: 0 10px 24px rgba(182, 234, 81, 0.45);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 30px rgba(182, 234, 81, 0.55);
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.cream};
    border: 2px solid ${({ theme }) => theme.colors.cream};

    &:hover {
      background: ${({ theme }) => theme.colors.cream};
      color: ${({ theme }) => theme.colors.charcoal};
      transform: translateY(-3px);
    }
  `,
  dark: css`
    background: ${({ theme }) => theme.colors.charcoal};
    color: ${({ theme }) => theme.colors.cream};
    box-shadow: 0 10px 24px rgba(28, 20, 16, 0.35);

    &:hover {
      transform: translateY(-3px);
      background: ${({ theme }) => theme.colors.espresso};
    }
  `,
  cactus: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.cactusLight}, ${({ theme }) => theme.colors.cactus});
    color: ${({ theme }) => theme.colors.charcoal};
    box-shadow: 0 10px 24px rgba(182, 234, 81, 0.45);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 30px rgba(182, 234, 81, 0.55);
    }
  `,
};

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  white-space: nowrap;

  ${({ $size }) => sizes[$size || 'md']}
  ${({ $variant }) => variants[$variant || 'primary']}

  &:active {
    transform: translateY(0);
  }
`;

export default Button;
