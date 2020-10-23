<script>
  import { getRandomQuote } from '../../services/getQuoteService.js';
  const onClick = () => {
    getRandomQuote();
  }
</script>

<div class="Header">
  <button on:click={onClick}>
    random
    <i class="material-icons md-18">cached</i>
  </button>
</div>

<style>
  div {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 70px;
  }
  button {
    display: flex;
    background: transparent;
    border-color: transparent;
    align-items: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #333333;
  }
  .material-icons {
    margin-left: 11px;
    color: #333333;
  }
</style>