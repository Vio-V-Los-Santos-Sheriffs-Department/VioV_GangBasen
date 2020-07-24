/*
        <div class="wrap-selector">
            <div
                class="item-point circle"
                data-top="4850"
                style="
                background: rgb(29, 28, 28) none repeat scroll 0% 0%;
                top: 930.182px;
                left: 297.275px;
                "
                data-left="1550"
                data-popover="#triaden"
            >
                <div>
                    <a href="#" class="toggle" style="width: 20px; height: 20px;"></a>
                </div>
          </div>
      </div>


      
        <div id="triaden" class="content right bottom animated">
          <div class="head">
            <a href="#" class="exit"
              ><img src="Police%20Academy-Dateien/close.png" alt=""
            /></a>
            <h6 class="title">Los Santos Vagos</h6>
          </div>
          <div class="body">
            <p>Farbe: Gelb</p>
            <p>WT-Routen: Östlicher Highway, Westlicher Highway</p>
          </div>
        </div>
*/

const data = {
    gangs: [
        {
            name: "Triaden",
            position: {
                x: 1550,
                y: 4850
            },
            blip_color: {
                r: 30,
                g: 30,
                b: 30
            },
            description: {
                skin: "https://cdn.namecode.de/attachments/qn4kc.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Schwarz"
                    }
                ]
            }
        },
        {
            name: "Dali",
            position: {
                x: 1530,
                y: 5440
            },
            blip_color: {
                r: 255,
                g: 255,
                b: 255
            },
            description: {
                skin: "https://i.imgur.com/mbeZcNc.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Weiß"
                    }
                ]
            }
        },
        {
            name: "Marlowe",
            position: {
                x: 1250,
                y: 4050
            },
            blip_color: {
                r: 150,
                g: 150,
                b: 150
            },
            description: {
                skin: "https://i.imgur.com/T00TH4l.jpg",
                texts: [
                    {
                        title: "Farbe",
                        content: "Grau"
                    }
                ]
            }
        },
        {
            name: "Anonymus",
            position: {
                x: 3130,
                y: 3510
            },
            blip_color: {
                r: 204,
                g: 14,
                b: 14
            },
            description: {
                skin: "https://i.imgur.com/zLUi27z.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Rot"
                    }
                ]
            }
        },
        {
            name: "YAMAGUCHI",
            position: {
                x: 1300,
                y: 5150
            },
            blip_color: {
                r: 229,
                g: 255,
                b: 0
            },
            description: {
                skin: "https://puu.sh/G917T/d430f8485b.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Gelb"
                    }
                ]
            }
        },
        {
            name: "San Fierro Rifa",
            position: {
                x: 3100,
                y: 4000
            },
            blip_color: {
                r: 0,
                g: 255,
                b: 255
            },
            description: {
                skin: "https://s12.directupload.net/images/200713/g9cis27c.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Türkis"
                    }
                ]
            }
        },
        {
            name: "La eMe",
            position: {
                x: 3530,
                y: 4000
            },
            blip_color: {
                r: 33,
                g: 0,
                b: 87
            },
            description: {
                skin: "https://i.imgur.com/qHPVP0J.jpg",
                texts: [
                    {
                        title: "Farbe",
                        content: "Dunkel Blau"
                    }
                ]
            }
        },
        {
            name: "Outlaws",
            position: {
                x: 4000,
                y: 1750
            },
            blip_color: {
                r: 56,
                g: 32,
                b: 9
            },
            description: {
                skin: "https://i.imgur.com/yXSdx8f.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Braun"
                    }
                ]
            }
        },
        {
            name: "Rattos Loccos",
            position: {
                x: 4700,
                y: 2000
            },
            blip_color: {
                r: 1,
                g: 82,
                b: 22
            },
            description: {
                skin: "https://i.imgur.com/0K884Cy.png",
                texts: [
                    {
                        title: "Farbe",
                        content: "Grün"
                    },
                    {
                        title: "WT-routen",
                        content: "keine"
                    }
                ]
            }
        }
    ]
};

loadHtml();


async function loadHtml() {
    let counter = 0;
    let html = "";

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

    $('#content').html($('#content').html() + html);
    $(".scalize").scalize();

}