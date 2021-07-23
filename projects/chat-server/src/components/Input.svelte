<script>
  export let post;
  let msg = "";

  const handleClick = () => {
    if (!msg) return;
    post(msg);
    msg = "";
  };
</script>

<div class="input">
  <input bind:value={msg} type="text" />
  <button on:click={handleClick} class="fas fa-chevron-right" />
</div>

<style>
  .input {
    width: 100%;
    height: 4rem;
    display: flex;
    margin-top: 2rem;
  }

  input {
    width: 100%;
    height: 100%;
    background: #26282c;
    border-radius: 1rem;
    border: none;
    color: white;
    outline: none;
    padding-left: 1rem;
    font-size: 16px;
  }

  button {
    width: 4rem;
    height: 4rem;
    background: none;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    background: #1648ff;
    border-radius: 1rem;
    margin-left: 1rem;
  }
</style>
