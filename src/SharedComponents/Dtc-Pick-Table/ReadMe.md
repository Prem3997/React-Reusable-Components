## Library/PackageName
NA

## Library/PackageVersion
NA

## Library/PackageLicense
NA

## Installation guidelines/steps

Copy the Dtc-Pick-Table Folder


## How to use Pick-Table
1.Copy Dtc-Pick-Table folder
2.pickTableData, images, componentsVisibility (icon visibility as visible or hidden), displayMainData (field to be displayed in table), displayAdditionalData (fields to be displayed on hover of eyeIcon) and searchBoxPlaceholder needs to be passed as props to DtcPickTable.js file
            <DtcPickTable 
                pickTableData={users} 
                images={images}
                componentsVisibility={componentsVisibility}
                displayMainData={displayMainData}
                displayAdditionalData={displayAdditionalData}
                searchBoxPlaceholder={searchBoxPlaceholder}>
            </DtcPickTable> 
3.Refer PickTableData.js file for more details on props in Pick-Table folder (/src/DemoComponents/Pick-Table/PickTableData)

## Sample Configuration JSON FILE
export const images = {
  "eyeIcon":require("../../DemoComponents/Pick-Table/Assets/eyeIcon.png"),
  "plusIcon":require("../../DemoComponents/Pick-Table/Assets/plusIcon.png"),
  "minusIcon":require("../../DemoComponents/Pick-Table/Assets/minusIcon.png"),
  "checkIcon":require("../../DemoComponents/Pick-Table/Assets/checkIcon.png"),
  "addBtn":require("../../DemoComponents/Pick-Table/Assets/rightArrow.png"),
  "removeBtn":require("../../DemoComponents/Pick-Table/Assets/leftArrow.png"),
  "addAllBtn":require("../../DemoComponents/Pick-Table/Assets/rightDoubleArrow.png"),
  "removeAllBtn":require("../../DemoComponents/Pick-Table/Assets/leftDoubleArrow.png")
}
export const componentsVisibility = {
      "eyeIconVisibility":"visible",
      "plusIconVisibility":"visible",
      "minusIconVisibility":"visible",
      "searchBoxVisibility":"hidden",
      "searchBoxDisability":false
}
export const displayMainData = ["name"]
export const displayAdditionalData = ["phone","email","website"]
export const searchBoxPlaceholder = "Search"


## Sample Source/Data Json File

export const users = [
  {
    "id": 0,
    "isSelected":false, **isSelected is a mandatory field**
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-7368031 ",
    "website": "hildegard.org",
  },
  {
    "id": 1,
    "isSelected":false, **isSelected is a mandatory field**
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 ",
    "website": "anastasia.net",
  },
  

