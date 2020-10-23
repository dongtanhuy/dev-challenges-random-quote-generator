<script>
  import { getQuoteByAuthorName } from "../../services/getQuoteService.js";


  let isHover = false;
  const onMouseEnter = () => {
    isHover = true
  }
  const onMouseLeave = () => {
    isHover = false
  }
  const onClick = () => getQuoteByAuthorName(author)
  export let author, genre;
</script>

<div class="wrapper">
  <button on:click={onClick} class={`${isHover ? 'btn-hover': ''}`} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave}>
    <div class="text">
      <span class={`author ${isHover ? 'author-hover': ''}`}>{author}</span>
      <span class="genre">{genre}</span>
    </div>
    <div class={`arrow ${isHover ? 'arrow-hover': ''}`}>
      <i class="material-icons md-18">arrow_right_alt</i>
    </div>
  </button>
</div>

<style>
  .wrapper {
    margin-top: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  button {
    display: flex;
    width: 672px;
    padding: 30px 50px;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-hover {
    background-color: #333333;
  }
  .text {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #333333;
  }
  .author {
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #4F4F4F;
    margin-bottom: 8px;

  }
  .author-hover {
    color: #F2F2F2;
  }
  .genre {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #828282;
  }
  .arrow {
    flex: 1;
    height: 100%;
    justify-content: flex-end;
    opacity: 0;
    display: flex;
  }
  .arrow-hover {
    opacity: 1;
  }
  .material-icons {
    color: #F2F2F2;
  }
</style>