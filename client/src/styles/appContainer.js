import styled from 'styled-components';

const AppContainer = styled.div`
  .recipes-container {
    display: grid;
    /* background: black; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  .image-container {
   height: 200px;
   width: 100%;
   border: 1px solid black;
  }
  .image {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .chef-container {
    height: 500px;
    width: 500px;
    margin: 10% auto 0 auto;
  }

  .chef {
    height: 100%;
    width: 100%;
  }

  .search {
    margin-top: 14px;
    display: block;
  }

  .search-label {
    margin: 0 auto .5% auto;
    display: block;
    text-align:center;
  }

  .search-text {
    margin: 0.5% auto 0 auto;
    display: block;
    width: 20%;
  }

  .search-button {
    display: block;
    margin: auto;
    border: 1px solid white;
    border-radius: 2%;
    background: lightgray;
    width: 8%;

  }
`;

export default AppContainer;
