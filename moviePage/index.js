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
            otherStar.src = "./images/greyStar.png"
        } else{
            otherStar.src = "./images/yellowStar.png"
        }
        newCounter++;
    }
}

function starLeave(){
    let starIndex = 1;
    for(let star of reviewStarsField.children){
        if(numberOfStars === 0 || starIndex > numberOfStars){
            star.src = "./images/greyStar.png";
        }
        else{
            star.src = "./images/yellowStar.png";
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
        const listItem = document.createElement("li");
        const reviewText = document.createElement("p");
        reviewText.textContent = "Review:\n" + review.text;

        const scoreAndDeleteDiv = document.createElement("div");
        scoreAndDeleteDiv.className = "flexBetween"

        const reviewScore = document.createElement("div");
        reviewScore.textContent = "Score: ";
        reviewScore.classList = "verticallyCentered reviewScore";
        
        const reviewStars = document.createElement("div");
        for(i=0; i<5; i++){
            const star = document.createElement("img");
            star.className = "existingStar";
            if(i < review.score){
                star.src = "./images/yellowStar.png";
            } else{
                star.src = "./images/greyStar.png";
            }
            reviewStars.appendChild(star);
        }
        reviewStars.className = "reviewStars"

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
        list.appendChild(listItem);
    });
    let newRating = calculateAvgRating(reviews);
    updateShowRating(newRating);
}

function readReview(){
    let reviewText = reviewTextField.value;
    let reviewScore = numberOfStars;
    return {
        text: reviewText,
        score: reviewScore
    }
}

function clearReviewFields(){
    reviewTextField.value = "";
    numberOfStars = 0;
    starLeave();
}

const postButton = document.querySelector("#postButton");
postButton.addEventListener('click', (event) =>{
    let review = readReview();
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
    let index = reviews.indexOf(review);
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