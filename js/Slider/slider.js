async function slider(){
    let slider = ""
    let data = await fetch("https://alisasa1379.github.io/dbfilimo/db.json")
    let res = await data.json()
    slider= res.sliders.map((elem)=>{
        return ` <div class="swiper-slide">
                    <img src=${elem.src} alt=${elem.alt}>
                  </div>`
    })
    document.querySelector("#slider").insertAdjacentHTML("afterbegin",slider.join(""))
}

export default slider