<script>
  export let msg;
  export let id;
  export let date;
  export let put;
  export let del;

  let toggle = false;
  let value = msg;

  const toggleEdit = () => (toggle = !toggle);
  const handlePut = () => {
    put(id, value);
    toggleEdit();
  };
  const handleDel = () => del(id);
</script>

<div class="message">
  <div class="text">
    <p class="date">{date}</p>

    {#if toggle}
      <input bind:value />
    {:else}
      <p class="msg">{msg}</p>
    {/if}
  </div>
  <div class="buttons">
    {#if toggle}
      <button on:click={handlePut} class="fas fa-check check" />
      <button on:click={toggleEdit} class="fas fa-times times" />
    {:else}
      <button on:click={toggleEdit} class="far fa-edit edit" />
      <button on:click={handleDel} class="fas fa-trash trash" />
    {/if}
  </div>
</div>

<style>
  .message {
    background: #26282c;
    min-height: 4rem;
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  /* text */
  .text {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .date {
    font-size: 12px;
    color: rgba(255, 254, 254, 0.699);
    margin-bottom: 0.5rem;
  }
  .msg {
    font-size: 16px;
    color: white;
  }
  input {
    background: none;
    border: none;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.767);
    border-bottom: 1px solid white;
    outline: none;
  }

  /* buttons*/
  .buttons {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .buttons button {
    border: none;
    background: none;
    padding: 0.2rem;
    margin: 0 0.5rem;
    font-size: 14px;
    cursor: pointer;
  }
  .edit {
    color: rgba(255, 255, 255, 0.726);
  }
  .trash {
    color: #fe0000a2;
  }
  .check {
    color: rgb(28, 235, 28);
  }
  .times {
    color: #fe0000a2;
  }
</style>
