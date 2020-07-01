import React from 'react';
import { useState } from 'react';
import { Button, TextField, IconButton, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import DtcCustomDialog from '../../SharedComponents/Dtc-Custom-Dialog/DtcCustomDialog';
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton';

function CustomDialogProps1(props) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      
      const useCloseIcon = makeStyles({
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: "grey",
          },
      })

      
      
      const useStylesDialogAction = makeStyles({
        root: {
          margin: 0,
          padding: theme.spacing(1),
        },
      })

      const useStylesDialogTitle = makeStyles({
        root: {
          margin: 0,
          padding: theme.spacing(2),
        },
      })
      
      const useStylesDialogContent = makeStyles({
        root: {
          padding: theme.spacing(1),
               
        },
        
      })
      const classesCloseButton = useCloseIcon()
      const classesDialogActions = useStylesDialogAction()
      const classesDialogContent = useStylesDialogContent()
      const classesDialogTitle = useStylesDialogTitle()

      const DialogConfig = {
        maxWidth:'xs', //xs,sm,md,lg,xl
        disableBackdropClick:false,
        disableEscapeKeyDown:false,
        fullWidth:true,
        fullScreen:useMediaQuery(theme.breakpoints.down('sm')),
        dividers:true,
        scroll:'paper',
        dialogTitle:
            <div>
                <span style={{float:'left'}}>Custom Dialog</span>
                 <IconButton style={{float:'right'}} aria-label="close" classes={{root:classesCloseButton.closeButton}} onClick={handleClose}>
                    <CloseIcon />
                </IconButton>    
            </div>,
        dialogContent:
            <div>
                {/* <div>Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</div> */}
                <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                />
                 {/* {[...new Array(50)]
                     .map(() => `Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')} */}
            </div>,
        dialogActions:<div>
                        <Button onClick={handleClose} color="primary" variant="outlined">
                            Save
                        </Button>
                        <Button onClick={handleClose} color="primary"  variant="outlined" autoFocus>
                            Cancel
                        </Button>
                    </div>
                   }
      
    return (
        <div>
            <DtcButton
                className='dtc-secondary-outline-whiteBg'
                onClick={handleClickOpen}
                buttonLabel='Form dialog'
            />
            <DtcCustomDialog
                open={open} 
                handleClose={handleClose} 
                handleClickOpen={handleClickOpen} 
                DialogConfig={DialogConfig}
                classesDialogActions={classesDialogActions}
                classesDialogContent={classesDialogContent}
                classesDialogTitle={classesDialogTitle}></DtcCustomDialog>
        </div>
    );
}

export default CustomDialogProps1;