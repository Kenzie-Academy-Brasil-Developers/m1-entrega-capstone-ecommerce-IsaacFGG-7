const objProducts = document.querySelector('.productItens')

function listarProdutos (data, referenciaData){

  for (let i = 0; i < data.length; i++){

    let cont = data[i];

    let template = templateData(cont);

    referenciaData.appendChild(template)

  }
}

listarProdutos(data, objProducts);

function templateData (item){

  let itemImg         = item.img;
  let itemName        = item.nameItem;
  let itemDescription = item.description;
  let itemValue       = item.value;
  let itemType        = item.tag;
  let itemId          = item.id;
  let itemAddCart     = item.addCart;

  let tagLi           = document.createElement('li');
  let tagImg          = document.createElement('img');
  let tagDiv          = document.createElement('div');
  let tagSpan         = document.createElement('span');
  let tagPname        = document.createElement('p');
  let tagPdescription = document.createElement('p');
  let tagPvalor       = document.createElement('p');
  let tagAaddCart     = document.createElement('a');

  tagLi.classList.add('card');
  tagImg.classList.add('imgCard');
  tagDiv.classList.add('cardInfo');
  tagSpan.classList.add('spanCard');
  tagPname.classList.add('productName');
  tagPdescription.classList.add('productDescription');
  tagPvalor.classList.add('productPrice');
  tagAaddCart.classList.add('addCart');

  tagImg.src                = itemImg;
  tagImg.alt                = itemName;
  tagSpan.innerText         = itemType;
  tagPname.innerText        = itemName;
  tagPdescription.innerText = itemDescription;
  tagPvalor.innerText       = `R$ ${itemValue}`;
  tagAaddCart.innerText     = itemAddCart;
  tagAaddCart.href          = '#';
  tagAaddCart.id            = itemId;

  tagLi.append(tagImg, tagDiv)
  tagDiv.append(tagSpan, tagPname, tagPdescription, tagPvalor, tagAaddCart);

  return tagLi
}

let totalCount = 0;
const addCartIem = document.getElementsByClassName('addCart');

for (let i = 0; i <addCartIem.length; i++){

    let buttonCartItem = addCartIem[i]; 

    buttonCartItem.addEventListener('click', function(event){

        let element = event.target;
        let idElement = element.id;
        let id = parseInt(idElement)

        let itens = findObj(id);

        if (!itens){
            alert('Produto não cadastrado');
        }
        else{
            inserirCart(itens);
        }
    })
}

function findObj (id){
    for (let j = 0; j < data.length; j++){
        let itens = data[j];

        if(itens.id === id){
            return itens;
        }
    }
    return false
}

function inserirCart (itens){
    totalCount++;
    document.querySelector('.totalCounter').innerText = `${totalCount}`;

    let listaCarrinho = document.querySelector('.cartMain');
    
    let tagLi = document.createElement('li');
    let tagDiv = document.createElement('div');
    let tagImg = document.createElement('img');
    let tagDivInfo = document.createElement('div');
    let tagPname = document.createElement('p');
    let tagPprice = document.createElement('p');
    let tagAremove = document.createElement('a');

    let itemImg = itens.img;
    let itemName = itens.nameItem;
    let itemPrice = itens.value;
    let itemId = itens.id;

    tagLi.classList.add('cartItem');
    tagDiv.classList.add('cardCart');
    tagImg.classList.add('cartCardImg');
    tagDivInfo.classList.add('cartInfo');
    tagPname.classList.add('cartItemName');
    tagPprice.classList.add('cartValor');
    tagAremove.classList.add('removeButton');

    tagImg.src = itemImg;
    tagImg.alt = itemName;
    tagPprice.innerText = `R$ ${itemPrice}`;
    tagPname.innerText = itemName;
    tagAremove.href = '#';
    tagAremove.id = itemId;
    tagAremove.innerText = 'Remover item'

    tagAremove.addEventListener('click', function(event){
        
        let li = event.path[2];
        li.remove();

        totalCount--;
        document.querySelector('.totalCounter').innerText = `${totalCount}`;
    })

    tagLi.appendChild(tagDiv);
    tagDiv.append(tagImg, tagDivInfo);
    tagDivInfo.append(tagPname, tagPprice, tagPprice, tagAremove);
    listaCarrinho.appendChild(tagLi);

}