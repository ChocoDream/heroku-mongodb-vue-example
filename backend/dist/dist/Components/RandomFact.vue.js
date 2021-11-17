import './RandomFact.vue.css.proxy.js';

import { ref } from "../../_snowpack/pkg/@vue/reactivity.js";
import axios from "../../_snowpack/pkg/axios.js";
import { onMounted } from "../../_snowpack/pkg/@vue/runtime-core.js";

const defaultExport = {
  setup() {
    const fact = ref("mooo");

    const getFact = async () => {
      return await axios
        .get("api/fact")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error("ERROR CAUGHT WHEN CALLING TO SERVER", error);
          return "mooo";
        });
    };

    onMounted(async () => {
      fact.value = await getFact();
    });

    const getAnotherFact = async () => {
      fact.value = await getFact();
    };

    return {
      fact,
      getAnotherFact,
    };
  },
};

import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "../../_snowpack/pkg/vue.js"

const _withScopeId = n => (_pushScopeId("data-v-12252dc4"),n=n(),_popScopeId(),n)
const _hoisted_1 = { class: "fact-wrapper" }

export function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("h2", null, "\"" + _toDisplayString(_ctx.fact.text) + "\"", 1),
    _createElementVNode("h4", null, _toDisplayString(_ctx.fact.author), 1),
    _createElementVNode("button", {
      class: "fact-button",
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.getAnotherFact()))
    }, "Another fact")
  ]))
};

defaultExport.render = render;

defaultExport.__scopeId = "data-v-12252dc4";

export default defaultExport;