import React, {useRef, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';

const DtcCustomDialog = ({ 
      open, 
      handleClose, 
      classesDialogActions,
      classesDialogTitle,
      classesDialogContent,
      DialogConfig:{
          fullWidth,
          maxWidth,
          fullScreen,
          disableBackdropClick,
          disableEscapeKeyDown,
          scroll,
          dialogTitle,
          dividers,
          dialogActions,
          dialogContent
         }}) => {
  
  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
  
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  
 
 
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        keepMounted
        fullWidth={fullWidth}
        maxWidth={maxWidth}//xs,sm,md,lg,xl
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={fullScreen}
        disableBackdropClick={disableBackdropClick}
        disableEscapeKeyDown={disableEscapeKeyDown}
        scroll={scroll}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title" classes={{root:classesDialogTitle.root}}>
            {dialogTitle}
            
          </DialogTitle>
        <DialogContent dividers={dividers} classes={{root:classesDialogContent.root}}>
          <DialogContentText id="alert-dialog-description" 
            ref={descriptionElementRef}
            tabIndex={-1}
            >
            {dialogContent}
          </DialogContentText>

        </DialogContent>
        <DialogActions classes={{
          root:classesDialogActions.root
        }}>
          {dialogActions}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DtcCustomDialog;