export var SelectAndListData={
    "options":[
        { "label":"Person1","id":1,"collaborator":"Person1", "role":"developer","collaboratorId":1,"isPresenter":false,"sessionId": "00000000-0000-0000-0000-000000000000" },
        {"label":"Person2","id":2,"collaborator":"Person2","role":"developer","collaboratorId":2,"isPresenter":false,"sessionId": "00000000-0000-0000-0000-000000000000" },
        { "label":"Person3","id":3,"collaborator":"Person3","role":"developer","collaboratorId":3,"isPresenter":false,"sessionId": "00000000-0000-0000-0000-000000000000" },
        { "label":"Person4","id":4,"collaborator":"Person4","role":"developer","collaboratorId":4,"isPresenter":false,"sessionId": "00000000-0000-0000-0000-000000000000" }
    ]
}

export const selectListProps = {
    show: ["id","collaborator","role","collaboratorId","isPresenter","sessionId"],
    checkboxvalue:"isPresenter",
    checkboxname:"Presenter",
    checkbox : true,
    displaybox: ["collaborator","role"],
    preloaded: 1
}

export const images=[
   { "delIcon":require("../../DemoComponents/Select-And-List/Images/delIcon.png")},
   { "plusIcon":require("../../DemoComponents/Select-And-List/Images/plusIcon.png")}
]
