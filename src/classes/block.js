import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {

        this.value = value;
        this.options = options;
    }

    toHTML() {
        throw new Error("toHTML method must be released")
    }
}


export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = 1, styles} = this.options
        console.log(tag)
        return row(col(`<h${tag}>${this.value}<h${tag}/>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag = "p", styles} = this.options
        return row(col(`<${tag}>${this.value}<${tag}/>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {styles, alt, imgStyles} = this.options
        return row(`<img src="${this.value}" alt=${alt} style=${css(imgStyles)}  >`, css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {styles} = this.options

        const html = this.value.map(col).join("")
        return row(`${html}`, css(styles))
    }


}