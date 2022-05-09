let wraperbox=document.getElementById('wraper-box')
function ajax(){
    let request=new XMLHttpRequest();
    request.open('GET' "https://jsonplaceholder.typicode.com/);
    request.addEventListener ('load',function) {
        let data=JASON.parse(request.responseText);
        data.forEach(element);
        console.log(element);
    });

    request.send();
}
let mainWrapperPost = document.getElementById('post-block');
let overLayContent = document.getElementById('overLay');
let closeOverLay = document.getElementById('close');
let content = document.getElementById('content');
let addButton = document.getElementById('add');
let postOverLay = document.getElementById('postOverLay');
let form = document.getElementById('form');
let buttonPost = document.getElementById('post-Button');

// ვაგზავნი მოთხოვნას,მაგრამ ეს ქოლბექის გაშლილი სახე სად სჩანს ვე ვხვდები, ან მარტო ერთხელ 
//რატომ გვიწერია.
function ajax(url,callback) {
    let request= new XMLHttpRequest();
    request.open('GET',url);
    request.addEventListener('load',function() {
  let data=JSON.parse(request.responseText);
     callback(data);

    
    });
    request.send();
}

ajax('https://jsonplaceholder.typicode.com/posts', function(data){
    printData(data);
});

function printData(data) {
    data.forEach(element => {
        createPost(element);
    });
}

//  პოსტების ჯს-დან შექმნის ფუნქცია 
function createPost(item){
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');    
    divWrapper.setAttribute('data-id',item.id);
    //დატას მივანიჭი სახელი და წამოვიღე აიდი ნომერი.
    
//შევქმენი აიდის ჩსაწერი ადგილი
    let h2Tag = document.createElement('h2');
    h2Tag.innerText = item.id;
//შევქმენი ტაიტლის ჩასაწერი ადგილი
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = item.title;
//შევქმენი წაშლის ღილაკი
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete Post';
    deleteButton.setAttribute('data-id',item.id);
//დავაეფენდე სად რა უნდა იჯდეს
    divWrapper.appendChild(h2Tag);
    divWrapper.appendChild(h3Tag);
    divWrapper.appendChild(deleteButton);

//დავამატე ივენთი, დაკლიკვისას რა მინდა რომ მოხდეს

    divWrapper.addEventListener('click', function(event){
        // წმოიღებს კონკრეტულ id -ს
          let id = event.target.getAttribute('data-id'); 
        //   დაემაატება ამ აიდის კლასი,რომლის საშუალებითაც გამოჩნდება აიდის  უნიკალური ნომერი
          openOverLay(id);
    })

    deleteButton.addEventListener('click',function(event){
        event.stopPropagation();
        let id = event.target.getAttribute('data-id');
        deletePost(id);
    });

    mainWrapperPost.appendChild(divWrapper);
    console.log(divWrapper);
    //ეს კონსოლ ლოგები როდის მჭირდება ხომე კარგად ვერ გავიგე???
}

//აქტივს ვამატებ რადგან მარტო ამაზე ვიმოქმედო
function openOverLay(id) {
    overLayContent.classList.add('active');
    let url = https://jsonplaceholder.typicode.com/posts/${id};
    ajax(url,function(data){
        overLayFunction(data);

    })
    console.log(id);
}

 function deletePost(id){
     let url = https://jsonplaceholder.typicode.com/posts/${id};
     fetch(url, {
         method:'DELETE'
     })
    
 }


function overLayFunction(item){
    let titlePost = document.createElement('h3');
    titlePost.innerText = item.title;

    let description = document.createElement('p');
    description.innerText = item.body;

    content.appendChild(titlePost);
    content.appendChild(description);

}

closeOverLay.addEventListener('click',function(){
    overLayContent.classList.remove('active');
    content.innerHTML = ' ';
})

addButton.addEventListener('click',function(){
    postOverLay.classList.add('active-add');
})

form.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event.target);



// როგორ დავამატოთ ბ102 პოსტი რაც სერვერის ლინკზე არ არის.
    let formData = {
        title:event.target[0].value,
        title:event.target[1].value

    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

    //    მომხმარებელი ინფორმაციას რომ ჩაწერრს და დააწვება  პოსტის დამატებას ინფორმაცია უნდა წაიშალოს
         postOverLay.classList.remove('active-add');
         console.log(formData);
})
buttonPost.addEventListener('click',function(event) {
    let divButton = document.createElement('div');
    divButton.classList.add('appear-div');

    let divPPost= document.createElement('p');
    divPPost.innerText = formData.event.target[0];

    let divPPosts= document.createElement('p');
    divPPost.innerText = event.target[1];
    
    divButton.appendChild(divPPost);
    divButton.appendChild(divPPosts);

    buttonPost.classList.add('post-active');
    console.log(divButton);


})

    ajax();

    function createPost(item){
        let divwraper=document.createElement('div');
        divwraper.classList.add('posts');

        let h2Tag=document.createElement('h2');
        h2Tag.innerText=new.userId;

        let h3Tag=document.createElement('h3');
        h3Tag.innerText=item.title;
           
        )
    }

