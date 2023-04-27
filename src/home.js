const homePage = ()=>{
    const div = document.createElement('div');
    div.classList.add('homeDiv')
    const p = document.createElement('p');
    p.classList.add('home');
    p.setAttribute('id', 'pHome');
    p.textContent = "'Restaurant' Is a French Term \"Restaurant\" was once used to describe the rich bouillons served at taverns and public houses in France, which were meant to restore the spirits and relieve ailments. Ever since then, it has become a catch-all term to refer to any establishment that prepares food and serves it to customers.";
    div.appendChild(p);
    const image = document.createElement('img');
    image.classList.add('home');
    image.setAttribute('id', 'imgHome');
    image.src = "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
    div.appendChild(image);
    document.querySelector('#content').appendChild(div);
}

export default homePage;