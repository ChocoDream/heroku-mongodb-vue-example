import './App.vue.css.proxy.js';

import RandomFact from "./Components/RandomFact.vue.js";
const defaultExport = {
  components: { RandomFact },
};

import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "../_snowpack/pkg/vue.js"

const _hoisted_1 = { class: "app-wrapper" }
const _hoisted_2 = /*#__PURE__*/_createElementVNode("h1", null, "Hello from Vue!", -1)

export function render(_ctx, _cache) {
  const _component_random_fact = _resolveComponent("random-fact")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _createVNode(_component_random_fact)
  ]))
};

defaultExport.render = render;

export default defaultExport;