const commentsList = [
  {
  name:"Michael Lyons",
  comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
  date: '12/18/2018', 
  imageSource: '/assets/images/Mohan-muruge.jpg',
  },
  {
  name:"Gary Wong",
  comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
  date: '12/12/2018',
  imageSource: '/assets/images/Mohan-muruge.jpg',
  },
  {
  name:"Theodore Duncan",
  comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
  date: '11/15/2018', 
  imageSource: '/assets/images/Mohan-muruge.jpg',
  }
];



function createCommentBlock(imageSource, name, date, comment) {
  let inputImage = document.createElement("img");
  inputImage.classList.add("comments-section__profilepics");
  inputImage.src = imageSource;
  console.log(inputImage);
  let inputName = document.createElement("h3");
  inputName.classList.add("comments-section__names");
  inputName.innerText = name;
  console.log(inputName);
  let inputDate = document.createElement("h3");
  inputDate.classList.add("comments-section__dates");
  inputDate.innerText = date;
  console.log(inputDate);
  let inputText = document.createElement("p");
  inputText.classList.add("comments-section__comment-text");
  inputText.innerText = comment;
  console.log(inputText);
  let inputNameDate = document.createElement("div");
  inputNameDate.classList.add("comments-section__namedate-container");
  inputNameDate.appendChild(inputName);
  inputNameDate.appendChild(inputDate);
  console.log(inputNameDate);
  let inputNameDateText = document.createElement("div");
  inputNameDateText.classList.add("comments-section__namedatetext-container");
  inputNameDateText.appendChild(inputNameDate);
  inputNameDateText.appendChild(inputText);
  console.log(inputNameDateText);
  let inputNameDateComment = document.createElement("div");
  inputNameDateComment.classList.add("comments-section__subcontainer2");
  inputNameDateComment.appendChild(inputImage);
  inputNameDateComment.appendChild(inputNameDateText);
  console.log(inputNameDateComment);
  return inputNameDateComment;
}

let newcommentcontainer = document.querySelector('.maincommentscontainer');
let newcomment = createCommentBlock(commentsList[0].imageSource, commentsList[0].name, commentsList[0].date, commentsList[0].comment);
newcommentcontainer.appendChild(newcomment);
newcomment = createCommentBlock(commentsList[1].imageSource, commentsList[1].name, commentsList[1].date, commentsList[1].comment);
newcommentcontainer.appendChild(newcomment);
newcomment = createCommentBlock(commentsList[2].imageSource, commentsList[2].name, commentsList[2].date, commentsList[2].comment);
newcommentcontainer.appendChild(newcomment);








