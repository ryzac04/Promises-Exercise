// Objective 1

let url = 'https://deckofcardsapi.com/api/deck'

axios.get(`${url}/new/draw/`)
    .then(res => {
        // console.log("Objective 1", res)
        console.log("Objective 1 Answer:", `${res.data.cards[0].value.toLowerCase()} of ${res.data.cards[0].suit.toLowerCase()}`)
    })
    .catch(err => {
        console.log("Rejected", err)
    })

// Objective 2

axios.get(`${url}/new/draw/`)
    .then(res => {
        firstCard = res.data.cards[0];
        let deckID = res.data.deck_id;
        // console.log("First", res)
        console.log("Objective 2 Answer:", `First card is ${res.data.cards[0].value.toLowerCase()} of ${res.data.cards[0].suit.toLowerCase()}`)
        return axios.get(`${url}/${deckID}/draw/`)
    })
    .then(res => {
        secondCard = res.data.cards[0];
        // console.log("Second", res)
        console.log("Objective 2 Answer:", `Second card is ${res.data.cards[0].value.toLowerCase()} of ${res.data.cards[0].suit.toLowerCase()}`)
    })
    .catch(err => {
        console.log("Rejected", err)
    })

// Objective 3

let $button = $('.button')
let $table = $('.table')

axios.get(`${url}/new/shuffle/`)
    .then(res => {
        deckID = res.data.deck_id;
        $button.show();
    })

$button.on('click', function () {
    axios.get(`${url}/${deckID}/draw/`)
        .then(res => {
            console.log("Objective 3", res)
            cardImg = res.data.cards[0].image
            $table.append(`<img src=${cardImg}>`
            );
            if (res.data.remaining === 0) $button.remove();
        });
});