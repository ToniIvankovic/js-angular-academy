let storageReviews = JSON.parse(localStorage.getItem("reviews")); //zašto raditi stringify/parse
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
        const reviewScore = document.createElement("p");
        reviewScore.textContent = "Score: " + review.score + "/5";
        listItem.appendChild(reviewText);
        listItem.appendChild(reviewScore);
        list.appendChild(listItem);
    });
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
    localStorage.setItem("reviews", JSON.stringify(reviews));
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

renderReviews(reviews);