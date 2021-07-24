import { allShortcuts, isShortcut } from "./rules/shortcuts"
import { insertCSSRules } from "./cssRegistor"
import { toKebabCase } from "./function/changeCase"
import toCssValue from "./function/toCssValue"

const pseudoList = new Set([":hover", ":active", "::before", "::after"])
/**
 * @namespace JSS
 */
export const JSS = new Proxy(
  {
    _description: "jss atom generator. Shortcuts(Tailwindcss style, with JIT)",
    path: [],
  },
  {
    get: (target, p: any) => {
      if (pseudoList.has(p)) {
        return JSS(p)
      }

      if (isShortcut(p)) {
        const fullSelector = "." + p + target.path.join("")
        insertCSSRules(
          fullSelector,
          JSON.parse(`{${allShortcuts.get(p) || ""}}`)
        )
        return fullSelector
      }

      return p
    },
    apply(target, thisArg, args) {
      // args is pesudo elemet
      const inputPesudo = args[0]
      Reflect.set(target, "path", [...target.path, inputPesudo])
    },
  }
)

/**
 * @namespace JSSC
 */
export const JSSC = new Proxy(
  { _description: "jss atom generator. Full css(CSS style, to pass any word)" },
  {
    get: (target, p: string) => {
      return new Proxy((cssValue: string | number) => {}, {
        apply(target, thisArg, argArry) {
          return insertCSSRules("." + p, {
            [toKebabCase(p)]: toCssValue(argArry[0]),
          })
        },
      })
    },
  }
)
