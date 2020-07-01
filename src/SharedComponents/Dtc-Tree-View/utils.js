import React from 'react'

export function renderListItem(item) {
    return `${item.text} (${item.category}) - ₹${item.itemData.price}`;
}
export function renderListAllItem(item) {
    return `${item.text} - ₹${item.price})`;
}
export function renderTreeViewItem(value) {
    return <div>{value.text + (value.price ? ` (₹${value.price})` : "")}</div>;
}

