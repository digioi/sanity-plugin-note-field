import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { definePlugin, defineType } from 'sanity';
import React from 'react';
import startCase from 'lodash/startCase';
import { Card, Box, Inline, Heading, Flex, Text } from '@sanity/ui';
const NoteInput = React.forwardRef((args, ref) => {
  var _a;
  const {
    title,
    description,
    options
  } = args.schemaType;
  const displayTitle = startCase(args.id) === title ? null : title;
  const icon = options == null ? void 0 : options.icon;
  const tone = (_a = options == null ? void 0 : options.tone) != null ? _a : "primary";
  if (!displayTitle && !description) return null;
  const CustomIcon = icon;
  return /* @__PURE__ */jsxs(Card, {
    ref,
    padding: [2, 4],
    radius: 3,
    tone,
    children: [displayTitle && /* @__PURE__ */jsx(Box, {
      marginBottom: description ? 2 : 0,
      children: /* @__PURE__ */jsxs(Inline, {
        space: 1,
        children: [icon && /* @__PURE__ */jsx(CustomIcon, {}), /* @__PURE__ */jsx(Heading, {
          size: 1,
          children: displayTitle
        })]
      })
    }), description && /* @__PURE__ */jsxs(Flex, {
      align: "center",
      children: [/* @__PURE__ */jsx(Box, {
        style: {
          flexShrink: 0,
          lineHeight: 0
        },
        children: icon && !displayTitle && /* @__PURE__ */jsx(CustomIcon, {
          style: {
            fontSize: 24
          }
        })
      }), /* @__PURE__ */jsx(Box, {
        marginLeft: displayTitle ? 0 : 3,
        marginTop: !icon && displayTitle ? 1 : 0,
        children: /* @__PURE__ */jsx(Text, {
          size: [1, 1, 1],
          children: description
        })
      })]
    })]
  });
});
NoteInput.displayName = "NoteInput";
const noteField = definePlugin(() => {
  return {
    name: "sanity-plugin-note-field",
    schema: {
      types: [defineType({
        title: "Note",
        name: "note",
        type: "string",
        components: {
          input: NoteInput,
          field: props => /* @__PURE__ */jsx(Fragment, {
            children: props.children
          })
        }
      })]
    }
  };
});
export { noteField };
//# sourceMappingURL=index.esm.js.map
