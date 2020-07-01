export var formData={
    fields:[
        {
            placeholder:"Name",
            name:"Name",
            input_type:"text",
            required:true,
        },
        {
            placeholder:"Address",
            name:"Address",
            input_type:"big_text",
            required:true,
        }, 
        {
            placeholder:"Select City",
            name:"city",
            input_type:"dropdown",
            required:true,
            values:[
                "Chennai",
                "Bangalore",
                "Hyderabad"
            ]
        },
        {
            input_type:"radio",
            name:"gender",
            label:"Select Gender",
            radioValues:[
                {
                    label:'Male',
                    value:'male'
                },
                {
                    label:'Female',
                    value:'female'
                }
            ],
            defaultKey:"male"
        },
        {
            input_type:"checkbox",
            label:"Select Subscription",
            checkboxValues:[
                {
                    label:'Phone',
                    value:'Phone',
                    checked:false
                },
                {
                    label:'Email',
                    value:'Email',
                    checked:false
                },
            ],
        },
        {
            input_type:"switch",
            label:"Select Responsibility",
            switchValues:[
                {
                    label:'Manager',
                    value:'Manager',
                    checked:false
                },
                {
                    label:'Team Lead',
                    value:'Team Lead',
                    checked:false
                },
            ],
        },
        {   
            name:"Date Of Joining",
            label:"Select Date Of Joining",
            input_type:"date"
        },
        {
            name:"Joining Time",
            label:"Select Joining Time",
            input_type:"time"
        },
        {   
            fromName:"Departure Date",
            toName:"Arrival Date",
            input_type:"dateRange"
        },
    ]
}