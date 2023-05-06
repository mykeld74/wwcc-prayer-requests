<script>
</script>

<div class="formContainer">
  <form method="POST">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" placeholder="Your name" />
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Your email" />
    <label for="content">Prayer request</label>

    <textarea
      name="content"
      id="content"
      placeholder="Your prayer request"
      required
    />
    <input type="checkbox" name="staffOnly" id="staffOnly" />
    <label for="staffOnly">Staff only</label>
    <button type="submit">Submit</button>
  </form>
</div>

<style>
  .formContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20vh;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    border: 1px solid black;
    border-radius: 5px;
  }

  input,
  textarea {
    width: 50%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
  }

  button {
    width: 50%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
  }
</style>
