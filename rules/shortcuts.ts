import { GetMapItem } from 'typings/generic'

const numberList = [
  '0.5',
  '1',
  '1.5',
  '2',
  '2.5',
  '3',
  '3.5',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '14',
  '16',
  '20',
  '24',
  '28',
  '32',
  '36',
  '40',
  '44',
  '48',
  '52',
  '56',
  '60',
  '64',
  '72',
  '80',
  '96'
]
const percentList = [
  '1 / 2',
  '1 / 3',
  '2 / 3',
  '1 / 4',
  '2 / 4',
  '3 / 4',
  '1 / 5',
  '2 / 5',
  '3 / 5',
  '4 / 5',
  '1 / 6',
  '2 / 6',
  '3 / 6',
  '4 / 6',
  '5 / 6',
  '1 / 12',
  '2 / 12',
  '3 / 12',
  '4 / 12',
  '5 / 12',
  '6 / 12',
  '7 / 12',
  '8 / 12',
  '9 / 12',
  '10 / 12',
  '11 / 12'
]
function numberRuleGenerater(n: string, rule: [jss: string, css: string]): [string, string] {
  const [jss, css] = rule
  return [jss.replace('$<number>', n), css.replace('$<number>', n)]
}
function percentRuleGenerater(n: string, rule: [jss: string, css: string]): [string, string] {
  const [jss, css] = rule
  return [jss.replace('$<percent>', n), css.replace('$<percent>', (+n).toFixed(6))]
}

export const allShortcuts = new Map([
  /** @see https://tailwindcss.com/docs/background-size  */
  ['bg-cotainer', 'background-size: contain'],
  ['bg-cover', 'background-size: cover'],
  ['bg-auto', 'background-size: auto'],

  /** @see https://tailwindcss.com/docs/background-origin  */
  ['bg-origin-border', 'background-origin: border-box'],
  ['bg-origin-padding', 'background-origin: padding-box'],
  ['bg-origin-content', 'background-origin: content-box'],

  /** @see https://tailwindcss.com/docs/background-clip  */
  ['bg-clip-border', 'background-clip: border-box'],
  ['bg-clip-padding', 'background-clip: padding-box'],
  ['bg-clip-content', 'background-clip: content-box'],
  ['bg-clip-text', 'background-clip: text'],

  /** @see https://tailwindcss.com/docs/background-position  */
  ['bg-top', 'background-position: top'],
  ['bg-bottom', 'background-position: bottom'],
  ['bg-left', 'background-position: left'],
  ['bg-right', 'background-position: right'],
  ['bg-center', 'background-position: center'],
  ['bg-top-left', 'background-position: top left'],
  ['bg-top-right', 'background-position: top right'],

  /** @see https://tailwindcss.com/docs/background-repeat  */
  ['bg-repeat', 'background-repeat: repeat'],
  ['bg-no-repeat', 'background-repeat: no-repeat'],
  ['bg-repeat-x', 'background-repeat: repeat-x'],
  ['bg-repeat-y', 'background-repeat: repeat-y'],
  ['bg-repeat-round', 'background-repeat: round'],
  ['bg-repeat-space', 'background-repeat: space'],

  /** @see https://tailwindcss.com/docs/background-repeat  */
  ['bg-repeat', 'background-repeat: repeat'],
  ['bg-no-repeat', 'background-repeat: no-repeat'],
  ['bg-repeat-x', 'background-repeat: repeat-x'],
  ['bg-repeat-y', 'background-repeat: repeat-y'],
  ['bg-repeat-round', 'background-repeat: round'],
  ['bg-repeat-space', 'background-repeat: space'],

  /** @see https://tailwindcss.com/docs/cursor  */
  ['cursor-auto', 'cursor: auto'],
  ['cursor-default', 'cursor: default'],
  ['cursor-pointer', 'cursor: pointer'],
  ['cursor-wait', 'cursor: wait'],
  ['cursor-text', 'cursor: text'],
  ['cursor-move', 'cursor: move'],
  ['cursor-help', 'cursor: help'],
  ['cursor-not-allowed', 'cursor: not-allowed'],

  /** @see https://tailwindcss.com/docs/border-width  */
  ['border', 'border-width: 1px'],
  ['border-t', 'border-top-width: 1px'],
  ['border-r', 'border-right-width: 1px'],
  ['border-b', 'border-bottom-width: 1px'],
  ['border-l', 'border-left-width: 1px'],
  ...numberList.map((n) =>
    numberRuleGenerater(n, ['border-$<number>', 'border-width: $<number>px'])
  ),
  ...numberList.map((n) =>
    numberRuleGenerater(n, ['border-t-$<number>', 'border-top-width: $<number>px'])
  ),
  ...numberList.map((n) =>
    numberRuleGenerater(n, ['border-r-$<number>', 'border-right-width: $<number>px'])
  ),
  ...numberList.map((n) =>
    numberRuleGenerater(n, ['border-b-$<number>', 'border-bottom-width: $<number>px'])
  ),
  ...numberList.map((n) =>
    numberRuleGenerater(n, ['border-l-$<number>', 'border-left-width: $<number>px'])
  ),

  /** @see https://tailwindcss.com/docs/user-select  */
  ['select-none', 'user-select: none'],
  ['select-text', 'user-select: text'],
  ['select-all', 'user-select: all'],
  ['select-auto', 'user-select: auto'],

  /**
   * box-sizing(layout)
   * @see https://tailwindcss.com/docs/box-sizing
   */
  ['box-border', 'box-sizing: border-box'],
  ['box-content', 'box-sizing: content-box'],

  /**
   * width(sizing)
   * @see https://tailwindcss.com/docs/width
   */
  ['w-auto', 'width: auto'],
  ['w-full', 'width: 100%'],
  ['w-screen', 'width: 100vw'],
  ['w-min', 'width: min-content'],
  ['w-max', 'width: max-content'],
  ...numberList.map((n) => numberRuleGenerater(n, ['w-$<number>', 'width: calc($<number> * 4px)'])),
  ...percentList.map((n) =>
    percentRuleGenerater(n, ['w-$<precent>', 'width: calc($<precent>) * 100%'])
  ),

  /**
   * height(sizing)
   * @see https://tailwindcss.com/docs/height
   */
  ['h-auto', 'height: auto'],
  ['h-full', 'height: 100%'],
  ['h-screen', 'height: 100vw'],
  ['h-min', 'height: min-content'],
  ['h-max', 'height: max-content'],
  ...numberList.map((n) =>
    numberRuleGenerater(n, ['h-$<number>', 'height: calc($<number> * 4px)'])
  ),
  ...percentList.map((n) =>
    percentRuleGenerater(n, ['h-$<precent>', 'height: calc($<precent>) * 100%'])
  ),

  /**
   * font size(typography)
   * @see https://tailwindcss.com/docs/font-size
   */
  ['text-xs', 'font-size: 0.75rem; line-height: 1rem'],
  ['text-sm', 'font-size: 0.875rem; line-height: 1.25rem'],
  ['text-base', 'font-size: 1rem; line-height: 1.5rem'],
  ['text-lg', 'font-size: 1.125rem; line-height: 1.75rem'],
  ['text-xl', 'font-size: 1.25rem; line-height: 1.75rem'],
  ['text-2xl', 'font-size: 1.5rem; line-height: 2rem'],
  ['text-3xl', 'font-size: 1.875rem; line-height: 2.25rem'],
  ['text-4xl', 'font-size: 2.25rem; line-height: 2.5rem'],
  ['text-5xl', 'font-size: 3rem; line-height: 1'],
  ['text-6xl', 'font-size: 3.75rem; line-height: 1'],
  ['text-7xl', 'font-size: 4.5rem; line-height: 1'],
  ['text-8xl', 'font-size: 6rem; line-height: 1'],
  ['text-9xl', 'font-size: 8rem; line-height: 1'],

  /**
   * border-radius(borders)
   * @see https://tailwindcss.com/docs/border-radius
   */
  ['rounded-none', 'border-radius: 0px'],
  ['rounded-sm', 'border-radius: 0.125rem'],
  ['rounded', 'border-radius: 0.25rem'],
  ['rounded-md', 'border-radius: 0.375rem'],
  ['rounded-lg', 'border-radius: 0.5rem'],
  ['rounded-xl', 'border-radius: 0.75rem'],
  ['rounded-2xl', 'border-radius: 1rem'],
  ['rounded-3xl', 'border-radius: 1.5rem'],
  ['rounded-full', 'border-radius: 9999px']
  // TODO: there is a lot of others rules
] as const)

export type AllShortcuts = GetMapItem<typeof allShortcuts>[0]

export const shortcutsRegx = /(bg|)/
export function isShortcut(p: any): p is AllShortcuts {
  return allShortcuts.has(p)
}
