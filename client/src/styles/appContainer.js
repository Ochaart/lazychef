import styled from 'styled-components';

const AppContainer = styled.div`
  padding-bottom: 5%;
  font-family: sans-serif;
  .recipes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 2%;
    grid-row-gap: 2%;
    margin: 0 11%;
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

  .button-container {
    text-align: center;
    margin-bottom: 9%;
  }

  .search-button {
    border: 1px solid white;
    border-radius: 2%;
    background: lightgray;
    cursor: pointer;
    outline: none;
    width: 10%;
  }

  .title,
  .res-title {
    font-size: 120%;
    text-align: center;
    margin-top: 2.5%;
    margin-bottom: 1.5%;
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
  .modal-container {
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

  .modal,
  .res-modal {
    background-color: white;
    border: 1px solid black;
    height: auto;
    border-radius: 5px;
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
    cursor: initial;
    outline: none;
  }

  .modal {
    padding: 30px;
    width: 60%;
    max-width: 60%;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
  }

  .res-modal {
    padding: 30px 40px 30px 40px;
    width: 42%;
    max-width: 42%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 25px;
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
    margin: 2% 3% 3% 3%;
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
    margin-top: -6%;
  }

  .restaurant-image-container {
    height: 300px;
    width: 100%;
    border: 1px solid white;
    border-radius: 5%;
  }

  .restaurant-image {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border: 1px solid white;
    border-radius: 2%;
  }
  .stars-container {
    margin-top: 3%;
  }
  .restaurant-ratings {
    text-align: center;
  }

  .restaurant-card {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-content: center;
    margin: 3% 12%;
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
    outline:none;
    cursor: pointer;
  }
  .stars-container {
    display: flex;
    justify-content: center;
    margin-top: 2%
  }
  .count {
    margin-left: 2%;
    font-size: 75%;
  }
  .res-category {
    margin-top: 2%;
    font-size: 80%;
  }

  .res-image-carousel {
    display: flex;
    flex-flow: right;
    overflow: auto;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    margin-top: 2.5%;
    scroll-behavior: smooth;
  }

  .res-image-container {
    height: 400px;
    width: 400px;
    flex-shrink: 0;
  }
  .res-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .gallery {
    width: 400px;
  }

  .res-nav-dots {
    display: flex;
    justify-content: center;
  }
  .res-carousel-indicator {
    border: 0;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background: rgba(0,0,0,.3);
    margin: 8px 5px 0 5px;
    cursor: pointer;
  }
  .res-carousel-indicator.current-slide {
    background: rgba(0,0,0,.75)
  }
  .res-details {
    text-align: center;
  }
  .categories {
    display: flex;
    justify-content: center;
    margin: 5px 0 5px 0;
    div {
      border: 1px white solid;
      background: orange;
      border-radius: 50px;
      align-items: center;
      justify-content: center;
      display: flex;
      padding: 0px 8px;
      font-size: 12px;
    }
  }
  .price {
    margin: 5px 0 5px 0;
    font-size: 75%;
  }
  .res-title {
    font-size: 150%;
    margin-top: 6.5%;
  }
  .display-address {
    margin-top: 30px;
  }
  .hours {
    margin-top: 30px;
  }
  .yelp-logo-container {
    height: 60px;
    width: 120px;
    margin: 30px auto;
    outline: none;
  }
  .yelp-logo {
    height: 100%;
    width: 100%;
  }
`;

export default AppContainer;
