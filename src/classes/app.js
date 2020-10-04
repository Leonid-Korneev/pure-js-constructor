import {Site} from "./site";

import {Sidebar} from "./sidebar";

export class App {
    constructor(model) {
        this.model = model
    }

    init() {

        const site = new Site("#site")


        site.render(this.model)

        new Sidebar("#sidebar", newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        })

    }

}