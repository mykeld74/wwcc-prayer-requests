<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

  let startDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .slice(0, 10);
  let endDate = new Date().toISOString().slice(0, 10);
  let filteredprayers = data.prayers;

  // function to filter based on staffOnly
  function filterByStaff(data) {
    return data.filter(function (a) {
      return a.staffOnly === true;
    });
  }
  function filterForAll(data) {
    return data.filter(function (a) {
      return a.staffOnly === false;
    });
  }
  // javasript function to find items between two dates
  function filterByDate(data, startDate, endDate) {
    console.log(data, startDate, endDate);
    return data.filter(function (a) {
      const dateCreated = new Date(a.createdAt);
      return (
        dateCreated >= new Date(startDate) &&
        dateCreated <= new Date(endDate + " 23:59:59")
      );
    });
  }
</script>

<div>
  <main>
    <h3>Choose dates:</h3>
    <div class="dateContainer">
      <div>
        <label for="startDate">Start date:</label>
        <input type="date" bind:value={startDate} id="startDate" />
      </div>
      <div>
        <label for="endDate">End date:</label>
        <input type="date" bind:value={endDate} id="endDate" />
      </div>
      <button
        on:click={() => {
          filteredprayers = filterByDate(data.prayers, startDate, endDate);
        }}
        class="button filterButton"><span>Filter</span></button
      >
    </div>
    <div class="filterType">
      <h3>Filter by type:</h3>
      <div class="filterButtonContainer">
        <button
          class="button"
          on:click={() => {
            filteredprayers = filterForAll(data.prayers);
          }}
        >
          <span>Prayer Team</span></button
        >
        <button
          class="button"
          on:click={() => {
            filteredprayers = filterByStaff(data.prayers);
          }}
        >
          <span>Staff Only</span></button
        >
        <button
          class="button"
          on:click={() => {
            filteredprayers = data.prayers;
          }}
        >
          <span>All</span>
        </button>
      </div>
    </div>
    <div>
      {#each filteredprayers as prayer}
        <article class="prayerRequest">
          <h2>
            {#if prayer.author}{prayer?.author}{:else}Anonymous{/if}
          </h2>
          <h3>
            {#if prayer.email}{prayer?.email}{:else} No email provided{/if}
          </h3>
          <p>{prayer.content}</p>
          {#if prayer.staffOnly}
            <p class="staffOnly">Staff only</p>
          {/if}
        </article>
      {/each}
    </div>
  </main>
</div>

<style lang="postcss">
  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 1rem;
  }
  .dateContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2vw;
    align-items: end;
    h3 {
      margin: 0;
    }
    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #898989;
    }
  }
  .filterType {
    @media print {
      display: none;
    }
  }
  .prayerRequest {
    position: relative;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem 0;
    overflow: hidden;
  }
  .staffOnly {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 32px;
    background-color: red;
    color: white;
    position: absolute;
    top: 5px;
    right: -35px;
    transform: rotate(45deg);
    font-weight: 700;
  }
  .filterButtonContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2vw;
  }
  .button {
    height: 40px;
    position: relative;
    background: #f3f0f1;
    border: 2px inset rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: 0.25s ease-in-out;
    box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
      6px 6px 10px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: -6px -6px 10px rgba(235, 235, 235, 0.4),
        6px 6px 10px rgba(0, 0, 0, 0.05);
      border: 2px inset rgba(255, 255, 255, 0.2);
    }
  }
</style>
