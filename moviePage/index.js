const yellowStarPath = "./images/yellowStar.png";
const greyStarPath = "./images/greyStar.png";

let storageReviews = JSON.parse(localStorage.getItem("reviews"));
if(!storageReviews){
    storageReviews = [];
}

const reviews = storageReviews;
const list = document.querySelector(".reviewsList");
const reviewTextField = document.querySelector("#reviewText");
const reviewStarsField = document.querySelector("#stars");

let numberOfStars = 0;

function starHover(starIndex){
    let newCounter = 1;
    for(let otherStar of reviewStarsField.children){
        if(newCounter > starIndex){
            otherStar.src = greyStarPath;
        } else{
            otherStar.src = yellowStarPath;
        }
        newCounter++;
    }
}

function starLeave(){
    let starIndex = 1;
    for(let star of reviewStarsField.children){
        if(numberOfStars === 0 || starIndex > numberOfStars){
            star.src = greyStarPath;
        }
        else{
            star.src = yellowStarPath;
        }
        starIndex++;
    }
}

function starClick(starIndex){
    numberOfStars = starIndex;
}

function clearReviews(){
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}

function renderReviews(reviews){
    clearReviews()
    reviews.forEach(review => {
        const listItem = createReviewLI(review);
        list.appendChild(listItem);
    });
    const newRating = calculateAvgRating(reviews);
    updateShowRating(newRating);
}

function createReviewLI(review) {
    const listItem = document.createElement("li");
    const reviewText = document.createElement("p");
    reviewText.textContent = "Review:\n" + review.text;

    const scoreAndDeleteDiv = document.createElement("div");
    scoreAndDeleteDiv.className = "flexBetween";

    const reviewScore = document.createElement("div");
    reviewScore.textContent = "Score: ";
    reviewScore.classList = "verticallyCentered reviewScore";

    const reviewStars = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("img");
        star.className = "existingStar";
        if (i < review.score) {
            star.src = yellowStarPath;
        } else {
            star.src = greyStarPath;
        }
        reviewStars.appendChild(star);
    }
    reviewStars.className = "reviewStars";

    const reviewScoreNumber = document.createElement("div");
    reviewScoreNumber.textContent = "(" + review.score + "/5)";
    reviewScoreNumber.classList = "verticallyCentered reviewScore";


    const deleteDiv = document.createElement("div");
    deleteDiv.className = "deleteIconDiv verticallyCentered";

    const deleteButton = document.createElement("img");
    deleteButton.src = "./images/delete.png";
    deleteButton.className = "deleteIcon";
    deleteButton.onclick = () => deleteReview(review);
    deleteDiv.appendChild(deleteButton);

    scoreAndDeleteDiv.appendChild(reviewScore);
    scoreAndDeleteDiv.appendChild(reviewStars);
    scoreAndDeleteDiv.appendChild(reviewScoreNumber);
    scoreAndDeleteDiv.appendChild(deleteDiv);

    listItem.appendChild(reviewText);
    listItem.appendChild(scoreAndDeleteDiv);
    return listItem;
}

function readReview(){
    const text = reviewTextField.value;
    const score = numberOfStars;
    return {
        text,
        score
    }
}

function clearReviewFields(){
    reviewTextField.value = "";
    numberOfStars = 0;
    starLeave();
}

const postButton = document.querySelector("#postButton");
postButton.addEventListener('click', (event) =>{
    const review = readReview();
    if(review.text === "" || review.score === 0){
        return
    }
    clearReviewFields();
    reviews.push(review);
    saveReviewsToStorage(reviews);
    renderReviews(reviews);
})

function saveReviewsToStorage(reviews) {
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

function deleteReview(review){
    const index = reviews.indexOf(review);
    reviews.splice(index, 1);
    saveReviewsToStorage(reviews);
    renderReviews(reviews);
}

function calculateAvgRating(reviews){
    let sum = 0;
    for (let review of reviews){
        sum += parseInt(review.score);
    }
    return sum/reviews.length;
}

function updateShowRating(newRating){
    newRating = parseFloat(newRating).toFixed(1);
    const ratingDiv = document.querySelector("#showRating");
    const ratingTextSpan = document.createElement("span");
    ratingTextSpan.id = "showRatingSpan";
    
    if(isNaN(newRating)){
        ratingTextSpan.textContent = "No scores yet..."
    } else{
        ratingTextSpan.textContent = newRating + "/5";
    }

    const oldRatingSpan =  document.querySelector("#showRatingSpan");
    if(oldRatingSpan){
        ratingDiv.replaceChild(ratingTextSpan,oldRatingSpan);
    } else{
        ratingDiv.appendChild(ratingTextSpan);
    }
}

renderReviews(reviews);