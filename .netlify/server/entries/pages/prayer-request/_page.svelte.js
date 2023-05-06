import { c as create_ssr_component } from "../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".formContainer.svelte-tabtuh{display:flex;justify-content:center;align-items:center;margin-top:20vh}form.svelte-tabtuh{display:flex;flex-direction:column;justify-content:center;align-items:center;width:50%;height:50%;border:1px solid black;border-radius:5px}input.svelte-tabtuh,textarea.svelte-tabtuh{width:50%;margin:5px;padding:5px;border-radius:5px;border:1px solid black}button.svelte-tabtuh{width:50%;margin:5px;padding:5px;border-radius:5px;border:1px solid black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="formContainer svelte-tabtuh"><form method="POST" class="svelte-tabtuh"><label for="name">Name</label>
    <input type="text" name="name" id="name" placeholder="Your name" class="svelte-tabtuh">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="Your email" class="svelte-tabtuh">
    <label for="content">Prayer request</label>

    <textarea name="content" id="content" placeholder="Your prayer request" required class="svelte-tabtuh"></textarea>
    <input type="checkbox" name="staffOnly" id="staffOnly" class="svelte-tabtuh">
    <label for="staffOnly">Staff only</label>
    <button type="submit" class="svelte-tabtuh">Submit</button></form>
</div>`;
});
export {
  Page as default
};
