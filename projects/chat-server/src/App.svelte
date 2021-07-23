<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Input from "./components/Input.svelte";
  import Messages from "./components/Messages.svelte";

  let MessagesArray;

  onMount(async () => {
    const res = await axios.get("/api/messages");
    MessagesArray = await res.data;
  });

  const post = async (msg) => {
    const res = await axios.post("/api/messages", { msg });

    MessagesArray = await res.data;
  };

  const put = async (id, msg) => {
    const res = await axios.put("/api/messages", { id, msg });

    MessagesArray = await res.data;
  };

  const del = async (id) => {
    const res = await axios.delete(`/api/messages/${id}`);

    MessagesArray = await res.data;
  };
</script>

<!-- HTML -->
<main>
  <div class="app">
    <Messages {MessagesArray} {put} {del} />
    <Input {post} />
  </div>
</main>

<!-- Styles -->
<style>
  :root {
    --bg-color: #44454e;
    --app-color: #181a1c;
  }
  main {
    width: 100%;
    height: 100vh;
    background: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app {
    max-width: 1000px;
    width: 100%;
    max-height: 800px;
    height: 100%;
    background: var(--app-color);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
