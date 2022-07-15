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