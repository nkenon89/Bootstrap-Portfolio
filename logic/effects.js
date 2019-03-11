console.log("js file linked");

const headline = document.getElementById('mainHeadline');

mainHeadline.addEventListener('mouseover', function() {
    console.log('hovering over main headline');
    mainHeadline.innerHTML = 'Web Developer';
});

mainHeadline.addEventListener('mouseout', function() {
    console.log('hovering over main headline');
    mainHeadline.innerHTML = 'Nick Stumpf';
});