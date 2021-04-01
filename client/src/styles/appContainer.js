import styled from 'styled-components';

const AppContainer = styled.div`
  padding-bottom: 5%;
  font-family: helvetica;
  .recipes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 1%;
    grid-row-gap: 1%;
    margin: 0 9%;
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
    margin: 0 auto 8% auto;
    border: 1px solid white;
    border-radius: 2%;
    background: lightgray;
    width: 8%;
    cursor: pointer;
    outline: none;
  }

  .title {
    font-size: 150%;
    text-align: center;
  }
  .recipe-card {
    cursor: pointer;
    @keyframes rise {
      from {
        transform: translateY(30%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    animation: rise 0.5s;
    outline: none;
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
    cursor: pointer;
    outline: none;
  }

  .recipe-modal {
    background-color: white;
    padding: 20px;
    border: 1px solid black;
    height: auto;
    width: 60%;
    border-radius: 5px;
    max-width: 60%;
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
    cursor: initial;
    outline: none;
  }

  .recipe-modal-description {
    display: block;
    text-align: justify;
  }
  .recipe-modal-details {
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
    font-size:
  }

  .metrix-container {
    display: inline-block;
    font-size: 80%;
    text-align: center;
    margin: 1% 0 1% 5%;
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

  .ingredients-list {
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    font-size: 63%;
    margin-right: -200px;
    width: 100%;
    height: auto;
    text-align: center;
  }

  .ingredient {
    margin: 1% 0;
    word-wrap: normal;
    width: 24%;
  }

  .facts {
    font-size: 75%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 11% 10%
  }

  .source-container {
    text-align: right;
    font-size: 78%;
    margin-right: 3%;
    display: grid;
    grid-template-columns: 4fr 2fr;
    align-items: center;
  }

  .source {
    grid-column-start: 2;
    grid-row-start: 1;
  }

  .source-link {
    grid-column-start: 2;
    grid-row-start: 2;
  }

  .cookbook-meal-container {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-left: 53%;
    font-size: 80%;
  }

  .cookbook-container, .meal-container {
    outline: none;
    cursor: pointer;
  }

  .book-container {
    height: 300px;
    width: 40%;
    margin: auto;
    z-index: -1;
  }
  .book {
    margin-top: -6%;
    height: 100%;
    width: 100%;
  }
  .cookbook {
    /* display: grid; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr */
    /* grid-template-columns: auto; */
    margin-top: -6%;
  }
`;

export default AppContainer;
