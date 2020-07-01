import React, { createElement } from 'react';

const DtcDynamicWidget = ({selectedComponent,DynamicWidgetComponents}) => {

    return (
        <div>
            {selectedComponent.map(block=>(
                typeof DynamicWidgetComponents[block.component] !== "undefined"? 
                    createElement(DynamicWidgetComponents[block.component], {
                      key: block._uid,
                      data: block
                    })
                  :
                   createElement(
                    () => <div>The component {block.component} has not been created yet.</div>,
                    { key: block._uid }
                  )
            ))}
            
        </div>
    );
}

export default DtcDynamicWidget;

