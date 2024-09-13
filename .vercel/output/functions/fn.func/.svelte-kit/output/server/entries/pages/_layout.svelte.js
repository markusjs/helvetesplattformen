import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index.js";
/* empty css                                                   */const css$1 = {
  code: "header.svelte-zr574m.svelte-zr574m{z-index:100;top:0;left:0;display:flex;position:sticky;max-width:100wv;justify-content:space-between;align-items:center;padding:24px;background:white}header.svelte-zr574m .title.svelte-zr574m{display:inline-block}@media(max-width: 720px){header.svelte-zr574m.svelte-zr574m{display:grid;padding-top:0}}h1.svelte-zr574m.svelte-zr574m{font-size:2rem;font-weight:bold;margin-bottom:0;margin-top:0}p.svelte-zr574m.svelte-zr574m{margin:8px 0}a.svelte-zr574m.svelte-zr574m{text-decoration:none;color:var(--text-color)}a.svelte-zr574m.svelte-zr574m:hover,a.svelte-zr574m.svelte-zr574m:focus{text-decoration:underline}@media(max-width: 720px){h1.svelte-zr574m.svelte-zr574m{font-size:2rem;margin-top:16px}}.link.svelte-zr574m.svelte-zr574m{text-decoration:underline;font-size:1rem}.links.svelte-zr574m a.svelte-zr574m{margin-right:24px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-zr574m"><div class="title svelte-zr574m"><a href="/" class="svelte-zr574m"><h1 class="svelte-zr574m">Helvetesplattformen</h1></a>
        <p class="svelte-zr574m">En oversikt over skriverier om Helseplattformen.</p></div>
    <section class="links svelte-zr574m"><a class="link svelte-zr574m" href="/om">Om siden</a>
        <a class="link svelte-zr574m" href="/rss.xml">RSS-feed</a>
        <a class="link svelte-zr574m" href="https://forms.gle/DKZ5oPBJYyieRxHk9">Send inn tips!</a></section>
</header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1at5kn2{color:var(--text-color)}.content.svelte-1at5kn2{max-width:1281px;margin:auto;padding:32px 24px}",
  map: null
};
let backgroundColor = "#ECEFF7";
let textColor = "#003B49";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ubk6hj_START -->${$$result.title = `<title>Helvetesplattformen</title>`, ""}<!-- HEAD_svelte-ubk6hj_END -->`, ""}
    <main style="${"--background-color: " + escape(backgroundColor, true) + "; --text-color: " + escape(textColor, true)}" class="svelte-1at5kn2">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
        <div class="content svelte-1at5kn2">${slots.default ? slots.default({}) : ``}</div>
    </main>`;
});
export {
  Layout as default
};
