import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DtcModal from '../../SharedComponents/Dtc-Modal/DtcModal';
import MultiSelect from '../Multi-Select/MultiSelect';
import CarouselIndex from '../Carousel/CarouselIndex';
import SnackBar from '../SnackBar/SnackBar'
import { DtcButton } from '../../SharedComponents/Dtc-Button/DtcButton';




export const ModalLoader = (props) => {
    const [showMultiSelect, setShowMultiSelect] = useState(false);
    const handleCloseMultiSelect = () => setShowMultiSelect(false);
    const handleShowMultiSelect = () => setShowMultiSelect(true);

    const [showCarousel, setShowCarousel] = useState(false);
    const handleCloseCarousel = () => setShowCarousel(false);
    const handleShowCarousel = () => setShowCarousel(true);

    const [showSnackbar, setShowSnackbar] = useState(false);
    const handleCloseSnackbar = () => setShowSnackbar(false);
    const handleShowSnackbar = () => setShowSnackbar(true);

    const elementCarousel = <CarouselIndex />
    const elementMultiSelect = <MultiSelect />
    const elementSnackBar = <SnackBar />

    const footerMultiSelect = <DtcButton
        className='dtc-secondary-whiteBg'
        onClick={handleCloseMultiSelect}
        buttonLabel='Close'
    />
    const footerCarousel = <DtcButton
        className='dtc-secondary-whiteBg'
        onClick={handleCloseCarousel}
        buttonLabel='Close'
    />
    const footerSnackBar = <DtcButton
        className='dtc-secondary-whiteBg'
        onClick={handleCloseSnackbar}
        buttonLabel='Close'
    />
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <DtcButton
                className='dtc-primary-whiteBg'
                onClick={handleShowMultiSelect}
                buttonLabel='Load Multi Select'
            />
            <DtcButton
                className='dtc-primary-whiteBg'
                onClick={handleShowCarousel}
                buttonLabel='Load Carousel'
            />
            <DtcButton
                className='dtc-primary-whiteBg'
                onClick={handleShowSnackbar}
                buttonLabel='Load SnackBar'
            />
            <DtcModal
                title='Multi-Select'
                show={showMultiSelect}
                element={elementMultiSelect}
                footer={footerMultiSelect}
            />
            <DtcModal
                title='Carousel-Example'
                show={showCarousel}
                element={elementCarousel}
                footer={footerCarousel}
            />
            <DtcModal
                title='SnackBar-Example'
                show={showSnackbar}
                element={elementSnackBar}
                footer={footerSnackBar}
            />
        </div>
    )
}
