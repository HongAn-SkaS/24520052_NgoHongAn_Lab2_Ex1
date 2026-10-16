
/**
 * Exercise 1: Mini-React VNode & Mounting Engine
 * Step 1: VNode Factory
 */

function createElement(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: children.map(child =>
      typeof child === "object" && child !== null
        ? child
        : createTextElement(child)
    )
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: String(text)
    },
    children: []
  };
}


function renderToDOM(vnode, container) {
  if (vnode.type === "TEXT_ELEMENT") {
    const textNode = document.createTextNode(vnode.props.nodeValue);
    container.appendChild(textNode);
    return;
  }

  const dom = document.createElement(vnode.type);

  Object.entries(vnode.props).forEach(([name, value]) => {
    if (name !== "children" && name !== "key") {
      if (name === "className") {
        dom.setAttribute("class", value);
      } else if (name.startsWith("on") && typeof value === "function") {
        dom.addEventListener(name.slice(2).toLowerCase(), value);
      } else if (name === "style" && typeof value === "object" && value !== null) {
        Object.assign(dom.style, value);
      } else if (value !== false && value != null && typeof value !== "function") {
        dom.setAttribute(name, value === true ? "" : String(value));
      }
    }
  });

  vnode.children.forEach(child => renderToDOM(child, dom));
  container.appendChild(dom);
}


const app = document.querySelector("#app");

const appVNode = createElement(
  "section",
  { className: "demo-section" },
  createElement("h2", null, "VNode Rendering Demo"),
  createElement("p", null, "Rendered from a VNode tree."),
  createElement("button", { type: "button" }, "Click me")
);

renderToDOM(appVNode, app);
