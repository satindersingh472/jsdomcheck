let first_id_tag = document.querySelector(`#first_id > p`);
first_id_tag[`innerText`] = `This was the first id tag`;

let second_id_tag = document.querySelector(`#second_id > p`);
second_id_tag[`innerText`] = `This was the second id tag`;

let all_classes = document.querySelectorAll(`.same_class > p`);
let counter = 0;
while(counter < all_classes.length){
all_classes[counter][`innerText`] = `These were all same class`;
counter ++ ;
}

let third_id_tag = document.getElementById(`third_id`);
third_id_tag[`innerText`] = `This was the third id tag`;

let fourth_id_tag = document.getElementById(`fourth_id`);
fourth_id_tag[`innerText`] = `This was the fourth id`;

let fifth_id_tag = document.getElementById(`fifth_id`);
fifth_id_tag[`innerText`]  = `This was the fifth id`;

let all_other_classes = document.getElementsByClassName(`other_class`);
let other_counter = 0;
while(other_counter < all_classes.length){
    all_other_classes[other_counter][`innerText`] = `These were all other classes`;
    other_counter++;
}