import styled from 'styled-components';
import { shade } from 'polished';

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 32px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 48px;
      font-weight: 400;
    }

    p {
      font-size: 24px;
      font-weight: 300;
      font-style: italic;

      margin-top: 8px;
    }

    button {
      height: 48px;
      width: 128px;

      background: #faf33e;

      border-radius: 10px;
      border: 0;

      color: #0e0608;
      font-weight: 500;
      font-size: 16px;

      padding: 0 16px;
      margin-top: 16px;

      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#faf33e')};
      }
    }
  }

  img {
    height: 500px;
  }
`;
