import { useState } from 'react';
import styled from 'styled-components';
import { GiCactus, GiHamburger } from 'react-icons/gi';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.wood}, ${({ theme }) => theme.colors.espresso});
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};
`;

const Fallback = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.textOnDarkMuted};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.wood}, ${({ theme }) => theme.colors.espresso});

  svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.gold};
    opacity: 0.85;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;

const SafeImage = ({ src, alt, icon, className, priority = false }) => {
  const [errored, setErrored] = useState(false);
  const Icon = icon || GiHamburger;

  return (
    <Wrap className={className}>
      {!errored && (
        <StyledImg
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <Fallback>
          <Icon />
          <span>Cactus Burguer</span>
        </Fallback>
      )}
    </Wrap>
  );
};

export default SafeImage;
export { GiCactus };
