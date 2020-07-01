import React, { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';

const RatingComponent = ({
    totalStars,
    iconApple,
    iconStar,
    starColor,
    appleColor,
    dollarColor
}) => {

    const [state, setState] = useState({
        rating: 1,
        rating_custom_icon: 6,
        rating_half_star: 2,
        rating_empty_initial: 0,
        rating_non_edit: 5,
    });

    const [stateRating, setRatingState] = useState({
        ratingStar: 1
    });

    const onStarClick = (
        nextValue,
        prevValue,
        name
    ) => {
        setState(state => ({
            ...state,
            rating: nextValue,
        }));
    };


    const onRatingClick = (
        nextValue,
        prevValue,
        name
    ) => {
        setRatingState(stateRating => ({
            ...stateRating,
            ratingStar: nextValue,
        }));
    };


    const onStarClickEmptyInitial = (
        nextValue,
        prevValue,
        name
    ) => {
        setState(state => ({
            ...state,
            rating_empty_initial: nextValue
        }));
    };

    return (
        <div>

            <h3>Colored Rating Stars:</h3>
            <div style={{ fontSize: 24 }} className="rating-broder" >
                <StarRatingComponent
                    name="rate"
                />
            </div>

            <h3>Editable with handlers (Rating from state is {state.rating}):</h3>
            <div className="rating-broder">

                <div style={{ fontSize: 30 }}>

                    <StarRatingComponent
                        name="rate1"
                        starCount={totalStars}
                        value={state.rating}
                        onStarClick={onStarClick.bind(state.rating)}
                        starColor={starColor}
                    />
                </div>
                <p> {state.rating} of {totalStars} stars</p>

            </div>

            <h2>Editable (with custom icons):</h2>
            <div className="rating-broder">
                <div style={{ fontSize: 30 }}>

                    <StarRatingComponent
                        name="rate2"
                        editing={true}
                        renderStarIcon={() => <span>{iconApple}</span>}
                        starCount={totalStars}
                        value={stateRating.ratingStar}
                        starColor={appleColor}
                        onStarClick={onRatingClick.bind(stateRating.ratingStar)}
                    />
                </div>
                <p> {stateRating.ratingStar} of {totalStars} stars</p>

            </div>

            <h3>Non-Editable:</h3>
            <div className="rating-broder">
                <div style={{ fontSize: 30 }}>
                    <StarRatingComponent
                        name="rate4"
                        starColor={dollarColor}
                        editing={false}
                        renderStarIcon={() => <span>{iconStar}</span>}
                        starCount={totalStars}
                        value={state.rating_non_edit}
                    />
                </div>
                <p> {state.rating_non_edit} of {totalStars} stars</p>
            </div>


            <h3>Editable (with 0 initial value):</h3>
            <div style={{ fontSize: 24 }}>
                <StarRatingComponent
                    name="rate5"
                    value={state.rating_empty_initial}
                    starCount={totalStars}
                    onStarClick={onStarClickEmptyInitial.bind(state.rating_empty_initial)} />
            </div>
            <p> {state.rating_empty_initial} of {totalStars} stars</p>

        </div>
    );
};

export default RatingComponent