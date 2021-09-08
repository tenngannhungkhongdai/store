const API_URL =
  "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
fetch(API_URL)
  .then((response) => response.json())
  .then((data) =>{
    alert(data.results[0].question)
    alert(data.results[1].question)
    alert(data.results[2].question)
    alert(data.results[3].question)
    alert(data.results[4].question)
  })
  .catch((error) => alert(error));
