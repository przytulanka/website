import styled from 'styled-components';

export const Container = styled.footer`
  color: ${({ theme }) => theme.color.dark};
  background: ${({ theme }) => theme.color.violet};

  /* nie ograniczaj wysokości footerowi */
  padding: 32px 0;
  overflow: visible;
  position: relative;
  z-index: 1; /* gdy nad stopką jest mapa/warstwa, to uniknie kolizji */
`;

export const Wrapper = styled.div`
  width: min(1440px, 92%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;   /* mobile */
  gap: 24px;
  align-items: start;

  /* tekst/linki mają się łamać — zero „wystawania” */
  a, p, li, span, div {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
    line-height: 1.5;
  }

  /* desktop: trzy kolumny */
  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr auto 1fr;
    gap: 32px;
    padding: 32px 48px;
  }
`;

export const StyledMenu = styled.nav`
  /* domyślnie menu chowasz na mobile — zostawiam zgodnie z Twoją logiką */
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLogo = styled.div`
  /* układ centralny logo w kolumnie środkowej */
  display: flex;
  justify-content: center;
  align-items: center;

  /* na desktopie możesz mieć większe logo */
  ${({ theme }) => theme.mq.desktop} {
    font-size: 5em;
  }
`;

export const StyledSocials = styled.div`
  /* na mobile wyśrodkuj i daj oddech */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  /* na desktopie zachowaj kolumnę z prawej i pozwól się rozciągać */
  ${({ theme }) => theme.mq.desktop} {
    justify-content: center; /* lub: flex-end — jeśli chcesz do prawej */
  }
`;

export const Copyright = styled.p`
  width: 100%;
  margin: 0 auto;
  padding: 8px 12px;
  color: ${({ theme }) => theme.color.bright};
  font-size: 0.75em;
  line-height: 1.6;
  text-align: center;
  background: ${({ theme }) => theme.color.green};

  /* długie linie niech się ładnie łamią */
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
`;
