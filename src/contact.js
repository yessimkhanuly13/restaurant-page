const contactPage = ()=>{

    const Contact = (contact, name) =>{
        return {
            contact, name
        }
    }

    const restaurant = Contact('77777777777', 'Restautant name');

    const div = document.createElement('div');
    div.classList.add('contactPage');
    const p = document.createElement('p');
    p.textContent = `${restaurant.contact}  -  ${restaurant.name}`;
    div.appendChild(p);
    document.querySelector('#content').appendChild(div);
}

export default contactPage;