# Ratings

## Library/PackageName
react-rating   <br/>
react-star-rating-component

## Library/PackageVersion
"react-rating": "^2.0.5",
"react-star-rating-component": "^1.4.1",

## Library/PackageLicense

## Installation guidelines/steps

Copy the Ratings Folder  <br/>
Install `react-rating` and `react-star-rating-component`

## Sample Configuration  FILE
### in RatingsProps.js file(initial data can be added here)
Pass the following props to DtcRatings.js file:<br/>

- totalStars - Maximum number of stars
- defaultStars - Number of stars by default
- initialRating - The value that will be used as an initial rating
- placeholderRating - 	If you do not define an initialRating value, you can use a placeholder rating. Visually, this will have the same result as if you had defined an initialRating value. If initialRating is set placeholderRating is not taken into account<br/>
- start - Range starting value (exclusive)
- stop - Range stop value (inclusive)
- starFull - Image for full star
- starEmpty - Image for empty star
- starGrey - Image for Grey color star
- starRed - Image for red color star
- starYellow - Image for yellow color star
- emptySymbol - React element, inline style object, or classes applied to the rating symbols when empty.
- fullSymbol - React element, inline style object, or classes applied to the rating symbols when full.
- emptyMixSymbol - fontawesome mixed symbols and empty 
- fullMixSymbol - fontawesome mixed symbols and full
- emptyStarSymbol - fontawesome empty star symbol
- fullStarSymbol - fontawesome full star symbol
- fractions - Number of equal subdivisions that can be selected as a rating in each Symbol. For example, for a fractions value of 2, you will be able to select a rating with a precision of down to half a Symbol. Must be >= 1 
- readonly - Whether the rating can be modified or not.
- initialRatingFractional - initial ratinga with fractions
- emptyThumbsSymbol - fontawesome empty thumb symbol
- fullThumbsSymbol - fontawesome full thumb symbol
- emptyHeartSymbol - fontawesome empty heart symbol
- fullHeartSymbol - fontawesome full heart symbol
- iconApple - keyboard apple icon ()
- iconStar - keyboard dollar icon ($)
- starColor - color for the star icon
- dollarColor - color for the dollar icon
- appleColor - color for the apple icon

## Usage
Eg for the usage:<br/>
Colored rating:<br/>
< Rating  
    stop={stop}
    emptySymbol={emptySymbol}
    fullSymbol={fullSymbol}
/> <br/>

## How to use
​1. Copy the Ratings folder and install the dependencies.​

​2. Import Dtc ratings and ratings fields are sent as props(in RatingsProps file).