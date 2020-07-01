import React, { useState } from 'react'
import TreeView from 'devextreme-react/tree-view';
import SelectBox from 'devextreme-react/select-box';
import './TreeViewStyles.css';
import { renderTreeViewItem, renderListItem, renderListAllItem } from './utils'
import { Button } from 'devextreme-react';
import List from 'devextreme-react/list';
import useMediaQuery from 'react-use-media-query-hook';
const options = ['contains', 'startswith'];

function DtcTreeView(props) {
    const [value, setValue] = useState('contains')
    const isMobile = useMediaQuery('(max-width: 425px)');
    const isTablet = useMediaQuery('(width: 768px)');
    var treeWidth=''

    if(isMobile){
        treeWidth=200
    }
    else if(isTablet){
        treeWidth=300
    }
    else{
        treeWidth=500
    }
    var [data, setData] = useState(props.products)
    const [state, setState] = useState({
        checkedItems: [],
        checkedAllItems: []
    })
    const valueChanged = (e) => {
        setValue(e.value)
    }
    const selectionChanged = (e) => {
        const value = e.node
        if (isProduct(value)) {
            processProduct({
                id: value.key,
                text: value.text,
                itemData: value.itemData,
                selected: value.selected,
                category: value.parent.text
            })
        }
        else {
            value.items.forEach(product => {
                processProduct({
                    id: product.key,
                    text: product.text,
                    itemData: product.itemData,
                    selected: product.selected,
                    category: value.text
                })
            })
        }
    }
    const isProduct = (data) => {
        return !data.items.length;
    }
    const processProduct = (product) => {
        setState((prevState) => {
            let itemIndex = -1
            const checkedItems = prevState.checkedItems
            checkedItems.forEach((item, index) => {
                if (item.id === product.id) {
                    itemIndex = index;
                    return false;
                }
            })
            if (product.selected && itemIndex === -1) {
                checkedItems.push(product);
            } else if (!product.selected) {
                checkedItems.splice(itemIndex, 1);
            }
            return { checkedItems: checkedItems.slice(0), checkedAllItems: [] };
        })
    }
    const onSelectAllClick = () => {
        let a = []
        props.products.forEach(prod => {
            prod.items.forEach(product => {
                let obj = { text: product.text, price: product.price }
                a.push(obj)
            })
        })
        setState({
            checkedItems: [],
            checkedAllItems: a
        })
    }
    const onRemoveAllClick = () => {
        setState({
            checkedItems: [],
            checkedAllItems: []
        })
    }
    const onSelectAllValueChanged = (e) => {
        if (e.value) {
            let a = []
            props.products.forEach(prod => {
                prod.items.forEach(product => {
                    let obj = { text: product.text, price: product.price }
                    a.push(obj)
                })
            })
            setState({
                checkedItems: [],
                checkedAllItems: a
            })
        }
        else {
            setState({
                checkedItems: [],
                checkedAllItems: []
            })
        }

    }
    const onExpandAllClick = () => {
        data = data.map(item => Object.assign({}, item, { expanded: true }))
        setData(data)
    }
    const onCollapseAllClick = () => {
        data = data.map(item => Object.assign({}, item, { expanded: false }))
        setData(data)
    }

    return (
        <div>
            <div className='button-layout'>
                <Button
                    width={120}
                    text="Expand All"
                    type="normal"
                    stylingMode="contained"
                    onClick={onExpandAllClick}
                />
                <Button style={{ marginLeft: '10px' }}
                    width={120}
                    text="Collapse All"
                    type="normal"
                    stylingMode="contained"
                    onClick={onCollapseAllClick}
                />
                <Button style={{ marginLeft: '10px' }}
                    width={120}
                    text="Select All"
                    type="normal"
                    stylingMode="contained"
                    onClick={onSelectAllClick}
                />
                <Button style={{ marginLeft: '10px' }}
                    width={120}
                    text="Remove All"
                    type="normal"
                    stylingMode="contained"
                    onClick={onRemoveAllClick}
                />
            </div>
            <div className='tree-layout'>
                <TreeView
                    id="treeview"
                    items={data}
                    width={treeWidth}
                    searchMode={value}
                    searchEnabled={true}
                    selectByClick={true}
                    showCheckBoxesMode="none"
                    onItemSelectionChanged={selectionChanged}
                    itemRender={renderTreeViewItem}
                    onSelectAllValueChanged={onSelectAllValueChanged}
                />
                <div className='select-layout'>
                    <SelectBox style={{ width: '200px' }}
                        items={options}
                        value={value}
                        onValueChanged={valueChanged}
                    />
                </div>
                <div className='selected-layout'>
                    {(state.checkedAllItems.length !== 0 || state.checkedItems.length !== 0) && <div className="selected-data">
                        Selected Products
                    </div>}
                    {state.checkedItems.length !== 0 && <List
                        id="checked-items"
                        width={treeWidth}
                        height={300}
                        items={state.checkedItems}
                        itemRender={renderListItem}
                    />}
                    {state.checkedAllItems.length !== 0 && <List
                        id="checked-items"
                        width={treeWidth}
                        height={300}
                        items={state.checkedAllItems}
                        itemRender={renderListAllItem}
                    />}
                </div>
            </div>
        </div>
    )
}
export default DtcTreeView



