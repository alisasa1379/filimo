async function products(){
    let products=""
    let data = await fetch("https://67ad895a3f5a4e1477ddfb30.mockapi.io/products")
    let res = await data.json()
    products = res.map((elem)=>{
        return `<div class="product">
                <div class="title">${elem.title}</div>
                <img src=${elem.img} alt=${elem.title}>
                <div class="description">${elem.description}</div>
                <div class="price">
                    $${elem.price}
                </div>
                <div class="rate">${elem.rate}</div>
                <button class="btn">buy now</button>
            </div>`
    })
    document.querySelector("#products").insertAdjacentHTML("afterbegin",products.join(" "))
}

export default products;