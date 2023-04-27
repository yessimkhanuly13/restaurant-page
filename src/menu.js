const menuPage = ()=>{

    const factoryMenu = (name, price) =>{
        return{
            name, price
        }
    }


    const burger = factoryMenu('Burger', '5$');
    const pizza  = factoryMenu('Pizza', '$7');
    const coke = factoryMenu('Coke', '$1.25');


    const div = document.createElement('div');
    const p = document.createElement('p');
    div.classList.add('menupage');
    div.setAttribute('id', 'firstItem');
    p.textContent = `${burger.name} - ${burger.price}`;
    div.appendChild(p);

    const p2 = document.createElement('p');
    p2.textContent = `${pizza.name} - ${pizza.price}`;
    div.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = `${coke.name} - ${coke.price}`;
    div.appendChild(p3);

    document.querySelector('#content').appendChild(div);
}

export default menuPage;