
// Objective 1

// Favorite number is 4:
let num = 4
let url = 'http://numbersapi.com'
axios.get(`${url}/${num}/trivia?json`)
    .then(res => {
        console.log("Objective 1", res.data)
        $(".one").append(`<ul>${res.data.text}</ul>`)
    })
    .catch(err => {
        console.log("Rejected", err)
    })

// Objective 2

let nums = [1, 2, 3, 4]
let promises = []
for (let i = 0; i < nums.length; i++) {
    promises.push(axios.get(`${url}/${nums[i]}/trivia?json`));
}

Promise.all(promises)
    .then(res => {
        console.log("Objective 2", res)
        for (let i = 0; i < res.length; i++){
            $(".two").append(`<ul>${res[i].data.text}</ul>`)
        }
    })
    .catch(err => {
        console.log("Rejected", err)
    })

// Objective 3

let fourFacts = []
for (let i = 0; i < 4; i++){
    fourFacts.push(
        axios.get(`${url}/${num}/trivia?json`)
    );
}

Promise.all(fourFacts)
    .then(res => {
        console.log("Objective 3", res)
        for (let i = 0; i < res.length; i++){
            $(".three").append(`<ul>${res[i].data.text}</ul>`)
        }
    })
    .catch(err => {
        console.log("Rejected", err)
    })