'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var jsxRuntime = require('react/jsx-runtime');
var sanity = require('sanity');
var React = require('react');
var startCase = require('lodash/startCase');
var ui = require('@sanity/ui');
function _interopDefaultCompat(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    default: e
  };
}
var React__default = /*#__PURE__*/_interopDefaultCompat(React);
var startCase__default = /*#__PURE__*/_interopDefaultCompat(startCase);
const NoteInput = React__default.default.forwardRef((args, ref) => {
  var _a;
  const {
    title,
    description,
    options
  } = args.schemaType;
  const displayTitle = startCase__default.default(args.id) === title ? null : title;
  const icon = options == null ? void 0 : options.icon;
  const tone = (_a = options == null ? void 0 : options.tone) != null ? _a : "primary";
  if (!displayTitle && !description) return null;
  const CustomIcon = icon;
  return /* @__PURE__ */jsxRuntime.jsxs(ui.Card, {
    ref,
    padding: [2, 4],
    radius: 3,
    tone,
    children: [displayTitle && /* @__PURE__ */jsxRuntime.jsx(ui.Box, {
      marginBottom: description ? 2 : 0,
      children: /* @__PURE__ */jsxRuntime.jsxs(ui.Inline, {
        space: 1,
        children: [icon && /* @__PURE__ */jsxRuntime.jsx(CustomIcon, {}), /* @__PURE__ */jsxRuntime.jsx(ui.Heading, {
          size: 1,
          children: displayTitle
        })]
      })
    }), description && /* @__PURE__ */jsxRuntime.jsxs(ui.Flex, {
      align: "center",
      children: [/* @__PURE__ */jsxRuntime.jsx(ui.Box, {
        style: {
          flexShrink: 0,
          lineHeight: 0
        },
        children: icon && !displayTitle && /* @__PURE__ */jsxRuntime.jsx(CustomIcon, {
          style: {
            fontSize: 24
          }
        })
      }), /* @__PURE__ */jsxRuntime.jsx(ui.Box, {
        marginLeft: displayTitle ? 0 : 3,
        marginTop: !icon && displayTitle ? 1 : 0,
        children: /* @__PURE__ */jsxRuntime.jsx(ui.Text, {
          size: [1, 1, 1],
          children: description
        })
      })]
    })]
  });
});
NoteInput.displayName = "NoteInput";
const noteField = sanity.definePlugin(() => {
  return {
    name: "sanity-plugin-note-field",
    schema: {
      types: [sanity.defineType({
        title: "Note",
        name: "note",
        type: "string",
        components: {
          input: NoteInput,
          field: props => /* @__PURE__ */jsxRuntime.jsx(jsxRuntime.Fragment, {
            children: props.children
          })
        }
      })]
    }
  };
});
exports.noteField = noteField;
//# sourceMappingURL=index.js.map
