export const unique=(array)=> {
    let arr = [];
    for(let i = 0; i < array.length; i++) {
    if(!arr.some(x=>x.id===array[i].id)) {
    arr.push(array[i]);
    }
    }
    return arr;
}