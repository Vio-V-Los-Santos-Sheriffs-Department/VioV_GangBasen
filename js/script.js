/*
*
*
*
*/







$(document).ready(() => {
    loadHtml();
})

// get Data Object from JSON
function getData() {
    return new Promise(resolve => {
        $.getJSON('js/data.json', (data) => {
            resolve(data);
        })
    });
}

// load Data into View
async function loadHtml() {
    let counter = 0;
    let wt_counter = 0;
    let html = "";
    const data = await getData();

   data.gangs.forEach((gang) => {
       let blip = "";
       let description = "";
       blip += `<div class="item-point circle" data-top="${gang.position.y}" data-left="${gang.position.x}" style="background: rgb(${gang.blip_color.r},${gang.blip_color.g},${gang.blip_color.b})" data-popover="#gang-${counter}">`;
           blip += `<div>`;
               blip += `<a href="#" class="toggle" style="width: 20px; height: 20px;"></a>`;
           blip += `</div>`;
       blip += `</div>`;

       description += `<div id="gang-${counter}" class="content right bottom">`;
           description += `<div class="head">`;
               description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
               description += `<h6 class="title">${gang.name}</h6>`;
           description += `</div>`;
           description += `<div class="body">`;
               description += `<p><img src="${gang.description.skin}" alt=" "/></p>`;
               description += `<p>`;
               gang.description.texts.forEach(text => {
                   description += `<b>${text.title}:</b> ${text.content}<br>`;
               });
               description += `</p>`;
           description += `</div>`;
       description += `</div>`;

       html += blip + description;

       counter++;
   });


    data.wt.forEach((gang) => {
        let blip = "";
        let description = "";
        blip += `<div class="item-point circle" data-top="${gang.position.y}" data-left="${gang.position.x}" style="background-image: url('assets/Blip_501.webp'); background-size: cover; background-color: rgba(0,0,0,0); border: 0;" data-popover="#wt-${counter}">`;
        blip += `<div>`;
        blip += `<a href="#" class="toggle" style="width: 20px; height: 20px;"></a>`;
        blip += `</div>`;
        blip += `</div>`;

        description += `<div id="wt-${counter}" class="content right bottom">`;
        description += `<div class="head">`;
        description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
        description += `<h6 class="title">${gang.name}</h6>`;
        description += `</div>`;
        description += `</div>`;

        html += blip + description;

        counter++;
    });

   $('#content').html($('#content').html() + html);
   $(".scalize").scalize();
}
