import {block, blockImg, blockTitle} from "../utils";
import {ImageBlock, TextBlock, TitleBlock} from "./block";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.init()
        this.update = update;
    }

    init() {
        this.$el.insertAdjacentHTML("afterbegin", this.template)
        this.$el.addEventListener("submit", this.add.bind(this))
    }


    get template() {
        return [block("text"), blockTitle("title"), blockImg("image")].join("")

    }

    add(event) {
        event.preventDefault();

        const value = event.target.value.value
        const type = event.target.name
        let styles = event.target.styles.value

        let newBLock ;
        if (type==="text") {
            newBLock = new TextBlock(value,{styles});
            event.target.value.value = ""
        } else  if(type==="title") {
            const size = event.target.size.value
            newBLock = new TitleBlock(value, {styles, tag: size, })
            event.target.value.value = ""
            event.target.size.value = 0;

        } else if (type === "image") {
            const align = event.target.align.value;
            const width = event.target.width.value;
            let size =  `width:${width}px;`;
            console.log(size)




            switch (align) {
                case "left" : "justify-content:flex-end;" ; break;

                case "right" : styles += "justify-content:flex-end;"; break;
                case "center" :   styles += "justify-content:center;"; break;

            }
            styles+="margin:100px;"



            newBLock= new ImageBlock(value, {styles, alt: "INVALID_URL", imgStyles: { width: `${width}%`}   })
            event.target.value.value = ""

        }

        this.update(newBLock)



        console.log(newBLock)

    }
}
