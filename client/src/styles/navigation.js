import styled from 'styled-components';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #52648e;
    height: 30px;
    position: sticky;
    top: -0.02px;
    .link {
      text-decoration: none;
      outline: none;
      color: black;
      cursor: pointer;
    }
`;

export default NavigationContainer;
