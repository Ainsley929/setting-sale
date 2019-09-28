function onSaleItems(item) {
  return item.discount > 0
}

function selectSaleItems(items) {
  return items.filter(onSaleItems)
}

module.exports = selectSaleItems
