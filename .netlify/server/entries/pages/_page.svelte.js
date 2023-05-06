import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1m78ebu.svelte-1m78ebu{max-width:960px;margin:0 auto;padding:1rem}.dateContainer.svelte-1m78ebu.svelte-1m78ebu{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-gap:2vw;gap:2vw;align-items:end}.dateContainer.svelte-1m78ebu input.svelte-1m78ebu{width:100%;padding:0.5rem;border-radius:5px;border:1px solid #898989}@media print{.filterType.svelte-1m78ebu.svelte-1m78ebu{display:none\n  }}.prayerRequest.svelte-1m78ebu.svelte-1m78ebu{position:relative;border:1px solid black;border-radius:5px;padding:1rem;margin:1rem 0;overflow:hidden}.staffOnly.svelte-1m78ebu.svelte-1m78ebu{display:flex;justify-content:center;align-items:center;width:150px;height:32px;background-color:red;color:white;position:absolute;top:5px;right:-35px;transform:rotate(45deg);font-weight:700}.filterButtonContainer.svelte-1m78ebu.svelte-1m78ebu{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-gap:2vw;gap:2vw}.button.svelte-1m78ebu.svelte-1m78ebu{height:40px;position:relative;background:#f3f0f1;border:2px inset rgba(255, 255, 255, 0.1);border-radius:10px;text-align:center;cursor:pointer;transition:0.25s ease-in-out;box-shadow:-6px -6px 10px rgba(255, 255, 255, 0.8),\n      6px 6px 10px rgba(0, 0, 0, 0.2)}.button.svelte-1m78ebu.svelte-1m78ebu:hover{box-shadow:-6px -6px 10px rgba(235, 235, 235, 0.4),\n        6px 6px 10px rgba(0, 0, 0, 0.05);border:2px inset rgba(255, 255, 255, 0.2)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let startDate = new Date(/* @__PURE__ */ (/* @__PURE__ */ new Date()).setDate(
    (/* @__PURE__ */ new Date()).getDate() - 7
  )).toISOString().slice(0, 10);
  let endDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let filteredprayers = data.prayers;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div><main class="svelte-1m78ebu"><h3>Choose dates:</h3>
    <div class="dateContainer svelte-1m78ebu"><div><label for="startDate">Start date:</label>
        <input type="date" id="startDate" class="svelte-1m78ebu"${add_attribute("value", startDate, 0)}></div>
      <div><label for="endDate">End date:</label>
        <input type="date" id="endDate" class="svelte-1m78ebu"${add_attribute("value", endDate, 0)}></div>
      <button class="button filterButton svelte-1m78ebu"><span>Filter</span></button></div>
    <div class="filterType svelte-1m78ebu"><h3>Filter by type:</h3>
      <div class="filterButtonContainer svelte-1m78ebu"><button class="button svelte-1m78ebu"><span>Prayer Team</span></button>
        <button class="button svelte-1m78ebu"><span>Staff Only</span></button>
        <button class="button svelte-1m78ebu"><span>All</span></button></div></div>
    <div>${each(filteredprayers, (prayer) => {
    return `<article class="prayerRequest svelte-1m78ebu"><h2>${prayer.author ? `${escape(prayer?.author)}` : `Anonymous`}</h2>
          <h3>${prayer.email ? `${escape(prayer?.email)}` : `No email provided`}</h3>
          <p>${escape(prayer.content)}</p>
          ${prayer.staffOnly ? `<p class="staffOnly svelte-1m78ebu">Staff only</p>` : ``}
        </article>`;
  })}</div></main>
</div>`;
});
export {
  Page as default
};
