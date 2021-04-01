import styled from 'styled-components';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #b87333;
    height: 30px;
    position: sticky;
    top: 0;
    .link {
      text-decoration: none;
      outline: none;
      color: black;
      cursor: pointer;
    }
`;

export default NavigationContainer;
