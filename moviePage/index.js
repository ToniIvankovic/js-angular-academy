let storageReviews = JSON.parse(localStorage.getItem("reviews"));
if(!storageReviews){
    storageReviews = [];
}

const reviews = storageReviews;
const list = document.querySelector(".reviewsList");
const reviewTextField = document.querySelector("#reviewText");
const reviewScoreField = document.querySelector("#reviewScore");

function clearReviews(){
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}

function renderReviews(reviews){
    clearReviews()
    reviews.forEach(review => {
        const listItem = document.createElement("li");
        const reviewText = document.createElement("p");
        reviewText.textContent = "Review:\n" + review.text;

        const scoreAndDeleteDiv = document.createElement("div");
        scoreAndDeleteDiv.className = "flexBetween"

        const reviewScore = document.createElement("div");
        reviewScore.textContent = "Score: " + review.score + "/5";
        reviewScore.style.display = "inline";
        
        const deleteButton = document.createElement("img");
        deleteButton.src = "./images/delete.png";
        deleteButton.className = "deleteIcon";
        deleteButton.onclick = () => deleteReview(review);
        
        scoreAndDeleteDiv.appendChild(reviewScore);
        scoreAndDeleteDiv.appendChild(deleteButton);

        listItem.appendChild(reviewText);
        listItem.appendChild(scoreAndDeleteDiv);
        list.appendChild(listItem);
    });
    let newRating = calculateAvgRating(reviews);
    updateShowRating(newRating);
}

function readReview(){
    let reviewText = reviewTextField.value;
    let reviewScore = reviewScoreField.value;
    return {
        text: reviewText,
        score: reviewScore
    }
}

function clearReviewFields(){
    reviewTextField.value = "";
    reviewScoreField.value = "";
}

const postButton = document.querySelector("#postButton");
postButton.addEventListener('click', (event) =>{
    let review = readReview();
    if(review.text === "" || review.score === "" || review.score > 5 || review.score < 1){
        return
    }
    clearReviewFields();
    reviews.push(review);
    saveReviewsToStorage(reviews);
    renderReviews(reviews);
})

//Validation of score
reviewScoreField.addEventListener('change', (event) => {
    let isValid = event.target.checkValidity();
    if(!isValid){
        reviewScoreField.style.border = "2px solid red";
    } else{
        reviewScoreField.style.border = "unset";
    }
});

function saveReviewsToStorage(reviews) {
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

function deleteReview(review){
    reviews.pop(reviews.indexOf(review));
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
    let ratingDiv = document.querySelector("#showRating");
    let ratingSpan = document.createElement("span");
    ratingSpan.id = "showRatingSpan";
    
    if(isNaN(newRating)){
        ratingSpan.textContent = "No scores yet..."
    } else{
        ratingSpan.textContent = newRating + "/5";
    }
    let oldRating =  document.querySelector("#showRatingSpan");
    if(oldRating){
        ratingDiv.replaceChild(ratingSpan,oldRating);
    } else{
        ratingDiv.appendChild(ratingSpan);
    }
}

renderReviews(reviews);