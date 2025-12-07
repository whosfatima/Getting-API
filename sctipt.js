const userContainer=document.querySelector('.userContainer')

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=> {
    return res.json()
})
.then((res)=> {
    res.forEach((item) => {
    const theUser= document.createElement('div')
    userContainer.appendChild(theUser)
    theUser.classList.add('user')
    theUser.innerHTML=`<h3>the userId: ${item.id}</h3>
    <p><strong>the title: </strong>${item.title}</p>
    <p><strong>the body:</strong> ${item.body}</p>
    `
    });
    // console.log(res);
})
.catch(()=>{
    console.log('there is no res');
})