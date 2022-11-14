/**
 * Adds a formatted tooltip to the given item. It will automatically wrap the text to fit the tooltip.
 * @param {ItemTooltipEventJS} e - The tooltip event.
 * @param {ResourceLocation} item - The ID of the item to add the tooltip to.
 * @param {String} tooltip - The text to add to the tooltip.
 * @param {Number} [wrapLength=30] - The line length to wrap the text at. Defaults to 30.
 * @example <caption>Example usage:</caption>
 * formattedTooltip(e, 'minecraft:dirt', 'This is a tooltip')
 */
const formattedTooltip = (e, item, tooltip, wrapLength) => {
  e.add(item, '')
  let line = ''
  tooltip.split(' ').forEach(word => {
    line.length == 0 ? line = word : line += ` ${word}`
    if (line.length > (wrapLength || 30)) {
      e.add(item, Component.of(line).darkPurple())
      line = ''
    }
  })
  if (line.length > 0) e.add(item, Component.of(line).darkPurple())
  e.add(item, '')
}

const disabledItem = (e, item) => {
  e.add(item, Component.red('This item is disabled.'))
}

const disabledItems = (e, items) => {
  items.forEach(item => disabledItem(e, item))
}