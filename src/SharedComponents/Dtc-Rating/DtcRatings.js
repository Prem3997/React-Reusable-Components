import React, { useState } from "react";
import Rating from 'react-rating';
import RatingComponent from './rating/RatingComponent';
import './styles/Ratings.css'

const DtcRatings = ({
    totalStars,
    defaultStars,
    initialRating,
    placeholderRating,
    start,
    stop,
    starFull,
    starEmpty,
    starGrey,
    starRed,
    starYellow,
    emptySymbol,
    fullSymbol,
    emptyMixSymbol,
    fullMixSymbol,
    emptyStarSymbol,
    fullStarSymbol,
    fractions,
    readonly,
    initialRatingFractional,
    emptyThumbsSymbol,
    fullThumbsSymbol,
    emptyHeartSymbol,
    fullHeartSymbol,
    iconApple,
    iconStar,
    starColor,
    dollarColor,
    appleColor
}) => {

    const [state, setState] = useState({
        value: initialRating,
        reset_value: 0,
        hoverValue: undefined
    });

    const ratingHandleClick = (
        event
    ) => {
        setState(state => ({
            ...state,
            value: undefined,
            reset_value: undefined,
        }));
    };

    const handleChange = (value) => {
        setState(state => ({
            ...state,
            value: value,
            reset_value: value
        }));
    };

    const handleHover = (hoverValue) => {
        setState(state => ({
            ...state,
            hoverValue: hoverValue,
        }));
    };

    return (
        <div>
            <h2 className="component-header">Different Types of Ratings</h2>
            <table className="table-style">

                <tbody>
                    <tr className="table-row">
                        <td>
                            <h3>Default rating:</h3>
                            <div >
                                <Rating
                                    placeholderRating={placeholderRating}/>
                            </div>
                        </td>
                    </tr>
                
                    <tr className="table-row">
                        <td>
                            <h3>Colored rating:</h3>
                            <Rating
                                stop={stop}
                                emptySymbol={emptySymbol}
                                fullSymbol={fullSymbol}
                            />
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td>
                            <h3>Readonly fractional rating:</h3>
                            <Rating
                                initialRating={initialRatingFractional}
                                readonly={readonly}
                            />
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td>
                            <h3>Mixed symbols:</h3>
                            <div>
                                <Rating
                                    emptySymbol={emptyMixSymbol}
                                    fullSymbol={fullMixSymbol}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>
                            <h3>Rating with placeholder:</h3>
                            <div >
                                <Rating
                                    placeholderRating={placeholderRating}
                                    emptySymbol={<img src={starGrey} alt="star-grey" className="icon" />}
                                    placeholderSymbol={<img src={starRed} alt="star-red" className="icon" />}
                                    fullSymbol={<img src={starYellow} alt="star-yellow" className="icon" />}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>
                            <h3>Half rating:</h3>
                            <Rating
                                emptySymbol={emptyStarSymbol}
                                fullSymbol={fullStarSymbol}
                                fractions={fractions}
                            />
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td>
                            <h3>React img element rating:</h3>
                            <Rating
                                emptySymbol={<img src={starEmpty} alt="star-empty" className="icon" />}
                                fullSymbol={<img src={starFull} alt="star-full" className="icon" />}
                            />
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>
                            <h3>Fontawesome Thumbs Up/Down rating :</h3>
                            <Rating
                                emptySymbol={emptyThumbsSymbol}
                                fullSymbol={fullThumbsSymbol}
                            />
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td>
                            <h3>Readonly rating:</h3>
                            <Rating
                                initialRating={initialRating}
                                readonly={readonly}
                            />
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>
                            <h3>Fontawesome Five Star rating:</h3>
                            <Rating
                                emptySymbol={emptyStarSymbol}
                                fullSymbol={fullStarSymbol}
                            />
                        </td>
                    </tr>

                    <tr className="table-row">
                        <td>
                            <h3>Reset rating:</h3>
                            <Rating {...defaultStars}
                                initialRating={state.value}
                            /><br />
                            <button onClick={ratingHandleClick}>Reset</button>
                        </td>
                    </tr>
                   
                
                 
                   
                    <tr className="table-row">
                        <td>
                            <h3>Bootstrap Five Heart rating :</h3>
                            <Rating
                                emptySymbol={emptyHeartSymbol}
                                fullSymbol={fullHeartSymbol}
                            />
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>

                            <h3>Alert when rate changes :</h3>
                            <Rating
                                emptySymbol={emptyHeartSymbol}
                                fullSymbol={fullHeartSymbol}
                                onChange={(rate) => alert(rate)}
                            />
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>

                            <h3>Update a label when rate moves:</h3>
                            <Rating {...initialRating}
                                onChange={handleChange}
                                onHover={handleHover}
                                initialRating={state.value} />
                            <div>{state.value} of 5</div>
                        </td>

                    </tr>

                    <tr className="table-row">
                        <td>
                            <RatingComponent
                                totalStars={totalStars}
                                iconApple={iconApple}
                                iconStar={iconStar}
                                starColor={starColor}
                                appleColor={appleColor}
                                dollarColor={dollarColor}
                            />
                        </td>

                    </tr>

                    <tr className="table-row">
                        <td>
                            <h3>1 to 10 rating:</h3>
                            <div >
                                <Rating
                                    stop={10}
                                />
                            </div>
                        </td>
                    </tr>
                    <tr className="table-row">
                        <td>
                            <h3>5 to 10 rating:</h3>
                            <div >
                                <Rating start={1}
                                    stop={stop} />
                            </div>
                        </td>
                    </tr>


                </tbody>
            </table>

        </div>

    );
}


export default DtcRatings