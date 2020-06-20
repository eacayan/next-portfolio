import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            background: #0e0e0e;
          }

          body {
            font-family: 'Saira', sans-serif;
            font-weight: 400;
            color: #fafafa;
            position: relative;
            overflow-x: hidden;
          }

          canvas {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
          }

          ::-webkit-scrollbar {
            display: none;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
