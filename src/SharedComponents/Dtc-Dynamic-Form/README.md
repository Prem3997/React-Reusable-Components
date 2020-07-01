# Dynamic form

## Library/PackageName
@material-ui/core

## Library/PackageVersion
@material-ui/core : ^4.9.11

## Library/PackageLicense

## Installation guidelines/steps

Copy the DynamicForm Folder
Install @material-ui/core

## Sample Configuration  FILE
### in FormProps.js file(initial form data can be added here)
Pass the formData to DynamicForm.js file:<br/>
FormData example<br/>
export var formData={ <br/>
    fields:[ <br/>
        {   <br/>
            placeholder:"Name",  <br/>
            name:"Name",  <br/>
            input_type:"text",  <br/>
            required:true, <br/>
        }  <br/>
    ]<br/>
Ex:<br/>
1.In fields, give  the necessary options according to the input_type.<br/>

2.You can give input type as text, dropdown, radio, checkbox, switch, date, time and daterange.<br/> 

3.Check for the formfields input type and based on that give the options. <br/>
Eg: If the input type is text: 
  < FormControl component="fieldset">  <br/>
    < InputTextField    
        name={formFields.name}
        placeholder={formFields.placeholder}
        required={formFields.required}
        key={formFields.placeholder}
        _handleChange={_handleChange}
    />  <br/>
  </ FormControl>  <br/>
Here name, placeholder, required, key are the parameters and handleChange is the function that will set the form value into the particular text box. <br/>

4.The options to get changed are: <br/>
- For text :
Placeholder, name and required.<br/>
- For dropdown: 
Placeholder, name, required and values(options for dropdown)<br/>
- For radio Button:
Label, name, radioValues and default key<br/>
RadioValues should conatin label and value for the particular radio button<br/>
- For Checkbox:
Label and CheckBox values<br/>
Checkbox values contain : label, value and checked <br/>
- For Switch:
Label and Switch values<br/>
SwitchValues contain: label, value and checked<br/>
- For Date:<br/>
Name and label <br/>
- For time: <br/>
Name and label <br/>
- For dateRange: <br/>
FromName and toName <br/>

## How to use
​1. Copy the Dynamic Form folder and install the dependencies.​

​2. Import the dynamic form and form fields are sent as props(in FormProps file).