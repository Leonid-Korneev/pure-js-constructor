export function row(content, styles = "") {

    return (
        `<div class="row" style="${styles}">
        ${content}
    </div>`)

}

export function col(content) {

    return (
        `<div class="col-sm">
      ${content}
    </div>`)

}

export function css(styles = {}) {
    if (typeof styles === "string") {
        return styles
    } else
        return Object.keys(styles).map((key) => `${key}:${styles[key]}`).join(";")

}


export function block(type) {

    return `
    <form name="${type}">
      <h5>Add new ${type.toUpperCase()}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
   `
}


export function blockTitle(type) {

    return `
    <form name="${type}">
      <h5> Add new ${type.toUpperCase()}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
        <div class="form-group">
        <label>Choose the size of title </label>
        <select class="form-control form-control-sm" name="size" placeholder="styles">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
              
        </select>
      
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
   `
}


export function blockImg(type) {

    return `
    <form name="${type}">
      <h5>Add new ${type.toUpperCase()}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="Image URL">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
                <br>
                <label>Image size</label>
             <input type="number" class="form-control form-control-sm" name="width" placeholder="Image size % of content page"  max="100" min="10"  >
   
        
                <br>
        
             <label>Image align</label>
             <p><input name="align" type="radio" value="center" checked> Center</p>
             <p><input name="align" type="radio" value="left"> Left</p>
             <p><input name="align" type="radio" value="right" > Right</p>
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
   `
}