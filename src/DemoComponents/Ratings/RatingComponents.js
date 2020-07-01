import React from "react";
import DtcRatings from "../../SharedComponents/Dtc-Rating/DtcRatings";
import {starColor,starEmpty,starFull,starGrey,starRed,starYellow,fullHeartSymbol,fullMixSymbol,
    appleColor,dollarColor,emptyHeartSymbol,emptyMixSymbol,emptyStarSymbol,emptySymbol,emptyThumbsSymbol,
fullStarSymbol,fullSymbol,fullThumbsSymbol,iconApple,iconStar} from './RatingsProps'

const RatingComponents = () => {
    return (
        <DtcRatings
            defaultStars={3}
            initialRating={2}
            placeholderRating={1.5}
            totalStars={10}
            stop={6}
            starFull={starFull}
            starEmpty={starEmpty}
            starGrey={starGrey}
            starRed={starRed}
            starYellow={starYellow}
            emptySymbol={emptySymbol}
            fullSymbol={fullSymbol}
            emptyMixSymbol={emptyMixSymbol}
            fullMixSymbol={fullMixSymbol}
            emptyStarSymbol={emptyStarSymbol}
            fullStarSymbol={fullStarSymbol}
            fractions={2}
            readonly={true}
            initialRatingFractional={2.5}
            emptyThumbsSymbol={emptyThumbsSymbol}
            fullThumbsSymbol={fullThumbsSymbol}
            emptyHeartSymbol={emptyHeartSymbol}
            fullHeartSymbol={fullHeartSymbol}
            start={4}
            iconApple={iconApple}
            iconStar={iconStar}
            starColor={starColor}
            dollarColor={dollarColor}
            appleColor={appleColor}
        >
        </DtcRatings >
    )
}
export default RatingComponents