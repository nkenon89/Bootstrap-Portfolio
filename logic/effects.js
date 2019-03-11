console.log("js file linked");

const changeLog = `

- Resume page failing to load embedded pdf

`;

alert("Hello and thank you for taking the time to view my portfolio! Please keep in mind this project is 'in progress'. The following is the current list of bugs and fixes I am currently working on:" + changeLog);

const headline = document.getElementById('mainHeadline');

mainHeadline.addEventListener('mouseover', function() {
    console.log('hovering over main headline');
    mainHeadline.innerHTML = 'Web Developer';
});

mainHeadline.addEventListener('mouseout', function() {
    console.log('hovering over main headline');
    mainHeadline.innerHTML = 'Nick Stumpf';
});