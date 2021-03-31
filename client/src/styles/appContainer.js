import styled from 'styled-components';

const AppContainer = styled.div`
  .recipes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 1%;
    grid-row-gap: 1%;
    margin: 0 6% 10% 6%;
  }
  .image-container {
   height: 200px;
   width: 100%;

  }
  .image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border: 1px solid white;
    border-radius: 5%;
  }

  .chef-container {
    height: 500px;
    width: 500px;
    margin: 8% auto 0 auto;
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
    margin: 0 auto 10% auto;
    border: 1px solid white;
    border-radius: 2%;
    background: lightgray;
    width: 8%;
    cursor: pointer;
  }

  .navigation {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #b87333;
    height: 30px;
    position: sticky;
    top: 0;
  }

  .title {
    font-size: 150%;
    text-align: center;
  }
  .recipe-card {
    cursor: pointer;
  }
  .recipe-modal-container {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter:blur(5px);
  }

  .recipe-modal {
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    height: auto;
    width: 80%;
    border-radius: 5px;
    max-width: 80%;
    @keyframes drop {
      from {
        transform: translateY(-30%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    animation: drop .5s;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    overflow: auto;
  }

  .recipe-modal-description {
    display: block;
    text-align: justify;
  }
  .recipe-modal-ingredients {
    /* display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    grid-row-gap: 1%; */
    font-family: inherit;
    margin: 20% 6% 0 0;
    display: block;
    text-align: right;
    color: darkslategray;

    .div {
      margin: auto 2%;
      text-align: center;
      color: darkslategray;
    }
  }

  .icons-container {
    margin-bottom: 3%;
    text-align: center;
  }

  .metrix-container {
    display: inline-block;
    font-size: 80%;
    text-align: center;
    margin: 1% 0 1% 3%;
  }

  .recipe-modal-description .title {
    margin-bottom: 1%;
  }

  .recipe-modal-description .image-container {
    margin: 0 3% 3% 3%;
    width: auto;
  }

  .summary {
    margin: 3%;
    color: darkslategray;
    text-indent: 3%;
  }

  .wine {
    margin: 3%;
    color: darkslategray;
    text-indent: 3%;
  }
`;

export default AppContainer;
