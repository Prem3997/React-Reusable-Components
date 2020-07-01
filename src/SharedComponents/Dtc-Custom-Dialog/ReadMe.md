## Library/PackageName
@material-ui/core

## Library/PackageVersion
@material-ui/core : ^4.9.11

## Library/PackageLicense
MIT

## Installation guidelines/steps

Copy the Dtc-Custom-Dialog Folder
Install @material-ui/core
Install react-draggable (for draggable dialog)

## How to use 

1.Copy  Dtc-Custom-Dialog folder.
2.Install @material-ui 
3.Install react-draggable (for draggable dialog)
4.Following props are passed to DtcCustomDialog.js file
  - open (state variable which gives status of dialog whether it is open or closed), 
  - handleClose, handleClickOpen (function to handle the close and open of dialog respectively),
  - dialogConfig : includes following set of configuration parameters
    - maxWidth : xs / sm / md / lg / xl
    - disableBackdropClick : boolean
    - disableEscapeKeyDown : boolean
    - fullWidth : boolean
    - fullScreen : useMediaQuery(theme.breakpoints.down('sm'))
    - dividers : boolean
    - scroll : paper / body
    - dialogTitle 
    - dialogContent 
    - dialogActions
  - classesDialogActions, classesDialogContent, classesDialogTitle (for overriding the styles of dialog title, content and actions respectively with classes )

<DtcButton
      className='dtc-secondary-outline-whiteBg'
      onClick={handleClickOpen}
      buttonLabel='Scrollable dialog'
/>
<DtcCustomDialog
      open={open} 
      handleClose={handleClose} 
      handleClickOpen={handleClickOpen} 
      dialogConfig={DialogConfig}
      classesDialogActions={classesDialogActions}
      classesDialogContent={classesDialogContent}
      classesDialogTitle={classesDialogTitle}>
</DtcCustomDialog>

## Sample Configuration  File

Pass the following props to DtcCustomDialog.js file:
    open, handleClose, handleClickOpen, dialogConfig, classesDialogActions, classesDialogTitle, classesDialogContent

Ex:
1.open (state variable which gives status of dialog whether it is open or closed), 

2.handleClose and handleClickOpen functions (to handle the close and open of dialog respectively):
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };  

3.const DialogConfig = {
        maxWidth:'xs',
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
                <div>Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </div>
            </div>,
        dialogActions:
            <div>
                <Button onClick={handleClose} color="primary" variant="outlined">Agree</Button>
                <Button onClick={handleClose} color="primary"  variant="outlined" autoFocus>Cancel</Button>
                </div>
      }
4.Custom Styling of DialogTitle,DialogContent and DialogActions can be done as below:

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
    const useStylesDialogAction = makeStyles({
        root: {
          margin: 0,
          padding: theme.spacing(1),
        },
      })

    const classesDialogActions = useStylesDialogAction()
    const classesDialogContent = useStylesDialogContent()
    const classesDialogTitle = useStylesDialogTitle()


 


