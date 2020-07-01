import React, { useState } from 'react';
import './PickStyle.scss'


const DtcPickTable = ({ 
    pickTableData,
    images:{eyeIcon,plusIcon,minusIcon,checkIcon,addBtn,addAllBtn,removeBtn,removeAllBtn},
    componentsVisibility:{eyeIconVisibility,plusIconVisibility,minusIconVisibility,searchBoxVisibility,searchBoxDisability},
    displayMainData,
    displayAdditionalData,
    searchBoxPlaceholder
 }) => {
    
    const [data, setData] = useState(pickTableData)
    const [tempData, setTempData] = useState(pickTableData)
    const [data1, setData1] = useState(pickTableData)
    const [dataAdded, setDataAdded] = useState([])
    const [addIndex, setAddIndex] = useState([])
    const [removeIndex, setRemoveIndex] = useState([])
    const [dataRemoved, setDataRemoved] = useState([])


    const onAdd = (e) => {
        e.isSelected === false ? e.isSelected = true : e.isSelected = false
        setAddIndex(dataAdded)
        setAddIndex([...addIndex, e])
        if (e.isSelected === true) {
            document.getElementById(e.id).style.backgroundColor = "#f2dad5"
            document.getElementById(e.id).getElementsByClassName("plusIcon")[0].src = checkIcon
        }
        else {
            document.getElementById(e.id).style.backgroundColor = ""
            document.getElementById(e.id).getElementsByClassName("plusIcon")[0].src = plusIcon
        }
    }

    const onAddSelected = () => {
        const b = addIndex.filter(item => item.isSelected === true)
        setDataAdded(b)
        const a = data.filter(item => !b.includes(item))
        setData(a)
        setTempData(a)
        setAddIndex([])
        setDataAdded([...dataAdded, ...b])
        b.map(dd => {
            document.getElementById(dd.id).style.backgroundColor = ""
            document.getElementById(dd.id).getElementsByClassName("plusIcon")[0].src = plusIcon
            return dd
        })
    }
    const addAll = (data) => {
        data.map(a => a.isSelected = true)
        setData([])
        setTempData([])
        setDataAdded([...dataAdded, ...data])

    }
    const onRemove = (e) => {
        e.isSelected === true ? e.isSelected = false : e.isSelected = true
        setRemoveIndex(dataRemoved)
        setRemoveIndex([...removeIndex, e])

        if (e.isSelected === false) {

            document.getElementById(e.id).style.backgroundColor = "#f2dad5"
            document.getElementById(e.id).getElementsByClassName("plusIcon")[0].src = checkIcon
        }
        if (e.isSelected === true) {

            document.getElementById(e.id).style.backgroundColor = ""
            document.getElementById(e.id).getElementsByClassName("plusIcon")[0].src = minusIcon
        }
    }

    const onRemoveSelected = () => {
        const b = removeIndex.filter(item => item.isSelected === false)
        setDataRemoved(b)
        let a = dataAdded.filter(item => !b.includes(item))
        setDataAdded(a)
        setRemoveIndex([])
        setData([...data, ...b])
        setTempData([...data, ...b])

        b.map(dd => {
            document.getElementById(dd.id).style.backgroundColor = ""
            document.getElementById(dd.id).getElementsByClassName("plusIcon")[0].src = minusIcon
            return dd
        })

    }
    const removeAll = (dataAdded) => {
        dataAdded.map(a => a.isSelected = false)
        setDataAdded([])
        setData([...data, ...dataAdded])
        setTempData([...data, ...dataAdded])
    }
    const onSelectAllAdd = (e) => {
        e.map(a => a.isSelected = true)
        setAddIndex(e)
        e.map(c => {
            if (c.isSelected === true) {

                document.getElementById(c.id).style.backgroundColor = "#f2dad5"
                document.getElementById(c.id).getElementsByClassName("plusIcon")[0].src = checkIcon

            }
            return c
        })
    }
    const onSelectAllRemove = (e) => {
        e.map(a => a.isSelected = false)
        setRemoveIndex(e)
        e.map(c => {
            if (c.isSelected === false) {

                document.getElementById(c.id).style.backgroundColor = "#f2dad5"
                document.getElementById(c.id).getElementsByClassName("plusIcon")[0].src = checkIcon
            }

            return c
        })
    }
    const onDeSelectAllAdd = () => {

        data.map(a => a.isSelected = false)
        data.map(dd => {
            document.getElementById(dd.id).style.backgroundColor = ""
            document.getElementById(dd.id).getElementsByClassName("plusIcon")[0].src = plusIcon
            return dd
        })

        setAddIndex([])
    }
    const onDeSelectAllRemove = () => {
        dataAdded.map(a => a.isSelected = true)
        dataAdded.map(dd => {
            document.getElementById(dd.id).style.backgroundColor = ""
            document.getElementById(dd.id).getElementsByClassName("plusIcon")[0].src = minusIcon
            return dd
        })
        setRemoveIndex([])

    }
    const filterAddData = (event) => {

        let filteredData = tempData.filter(filteredItem => {
            return filteredItem.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        })
        setData(filteredData)
        console.log(data)
        if (event.target.value.length === 0) {
            console.log(data1, dataAdded)
            const remainingData = data1.filter(item => !dataAdded.includes(item))
            setData(remainingData)
        }

    }

    const onSubmit = (dataAdded) => {
        console.log(dataAdded)
        setDataAdded([])
        const b = data.filter(item => item.isSelected === false)
        setData(b)
        setTempData(b)
        setData1(b)

    }

    const unique = (array) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            if (!arr.some(x => x.id === array[i].id)) {
                arr.push(array[i]);
            }
        }
        return arr;
    }
    const uniqueData = unique(data)
    const uniqueDataAdded = unique(dataAdded)


    return (
        <div className="row">
            <div className="column1">
                <button onClick={() => onSelectAllAdd(data)} className="select-add">Select All</button>
                <button onClick={() => onDeSelectAllAdd()} className="deselect-add">Deselect All</button>
                <input 
                    placeholder={searchBoxPlaceholder}
                    onChange={filterAddData}
                    className="search-add"
                    style={{visibility:searchBoxVisibility}}
                     disabled={searchBoxDisability}
                ></input>  
                <div className="data-table">
                    <table className="pick-table">
                        <tbody>
                            {uniqueData.sort((a, b) => a.id - b.id).map((data, i) => (
                                <tr key={i} id={data.id} onClick={() => onAdd(data)}>
                                    {Object.keys(data).filter(key => displayMainData.includes(key)).map((keyName, i) => (
                                        <td key={i}>{data[keyName]}</td>
                                    ))}
                                    <td>
                                        <span className="data-tooltip">
                                            <img src={eyeIcon} className="eyeIcon" alt="loading" style={{ visibility: eyeIconVisibility }}></img>
                                            <span>
                                                {Object.keys(data).filter(key => displayAdditionalData.includes(key)).map((keyName, i) => (
                                                    <div key={i}>{keyName} : {data[keyName]}</div>
                                                ))}
                                            </span>
                                        </span>
                                    </td>
                                    <td><img src={plusIcon} className="plusIcon" alt="loading" style={{ visibility: plusIconVisibility }}></img></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="column2">
                <span className="imgs">
                    <img onClick={() => addAll(data)} className="add-remove-btn" src={addAllBtn} alt="loading"></img>
                    <img onClick={onAddSelected} className="add-remove-btn" src={addBtn} alt="loading"></img>
                    <img onClick={onRemoveSelected} className="add-remove-btn" src={removeBtn} alt="loading"></img>
                    <img onClick={() => removeAll(dataAdded)} className="add-remove-btn" src={removeAllBtn} alt="loading"></img>
                </span>
            </div>
            <div className="column3">
                <button onClick={() => onSelectAllRemove(dataAdded)} className="select-add">Select All</button>
                <button onClick={() => onDeSelectAllRemove()} className="deselect-add">Deselect All</button>

                <div className="data-table">
                    <table className="pick-table">
                        <tbody>
                            {uniqueDataAdded.sort((a, b) => a.id - b.id).map((data, i) => (
                                <tr id={data.id} key={i} onClick={() => onRemove(data)}>
                                    {Object.keys(data).filter(key => displayMainData.includes(key)).map((keyName, i) => (
                                        <td key={i}>{data[keyName]}</td>
                                    ))}
                                    <td>
                                        <span className="data-tooltip">
                                            <img src={eyeIcon} className="eyeIcon" alt="loading" style={{ visibility: eyeIconVisibility }}></img>
                                            <span>
                                                {Object.keys(data).filter(key => displayAdditionalData.includes(key)).map((keyName, i) => (
                                                    <div key={i}>{keyName} : {data[keyName]}</div>
                                                ))}</span>
                                        </span>
                                    </td>
                                    <td><img src={minusIcon} className="plusIcon" alt="loading" style={{ visibility: minusIconVisibility }}></img></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button onClick={() => onSubmit(dataAdded)} className="submit-btn">Submit</button>
            </div>
        </div>


    );
}

export default DtcPickTable;