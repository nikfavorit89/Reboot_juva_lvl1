'use strict';
//задание 2

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + '-' + 'это ноль');
    } else if ((i % 2) == 0) {
        console.log(i + '-' + 'это четное число')
    } else {
        console.log(i + '-' + 'это нечетное число')
    }

}
//задание 3

const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [{
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2 //вывести это число
        }
    },
    {
        userId: 5, //вывести это число 
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст 
        rating: {
            likes: 3,
            dislikes: 1
        }
    },
    ]
}
console.log(post.author + " " + post.comments[0].rating.dislikes + " " + post.comments[1].userId + " " + post.comments[1].text)


// Задание 4

const products = [{
    id: 3,
    price: 200,
},
{
    id: 4,
    price: 900,
},
{
    id: 1,
    price: 1000,
},
];
products.forEach(function (b) {
    return b.price = b.price - b.price * 0.3;
});
console.log(products);
//products.forEach (a => {
//a.price = a.price - a.price * 0.15;
//});
//console.log(products);


//задание 5

const products5 = [
    {
        Id: 3, price: 127, photos: ["1.jpg", "2.jpg",
        ]
    },
    {
        id: 5, price: 499, photos: []
    },
    {
        id: 10, price: 26, photos: ["3.jpg"
        ]
    },
    {
        id: 8, price: 78,
    },];

const withPhotos = products5.filter(item => 'photos' in item && item.photos.length > 0);
console.log(withPhotos);

const sortedProducts = products5.sort(function (item1, item2){
           return item1.price - item2.price
});
console.log(sortedProducts);

//Задание 7
for (let x = 'x'; x.length <= 20; x += 'x'){
    console.log(x);
}