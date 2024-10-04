/**
 * Class representing a Costume.
 * Costumes can be added to a Sprite.
 * @extends Look
 *
 * @example
 * let costume = new blockLike.Costume();
 *
 * @example
 * let costume = new blockLike.Costume({
 *   width: 50,
 *   height: 50,
 *   color: '#A2DAFF',
 *   image: 'https://www.blocklike.org/images/sheep_step.png'
 * });
 */
export default class Costume extends Look {
    /**
    * constructor - Creates a Costume to be used by Sprite objects..
    *
    * @param {object} options - options for the costume.
    * @param {number} options.width - the costume width in pixels. Default is 100.
    * @param {number} options.height - the costume height in pixels. Default is 100.
    * @param {string} options.image - a URI (or data URI) for the costume image.
    * @param {string} options.color - a css color string ('#ff0000', 'red')
    */
    constructor(options?: {
        width: number;
        height: number;
        image: string;
        color: string;
    });
    width: number;
    height: number;
    visibleWidth: number;
    visibleHeight: number;
    image: string;
    color: string;
    innerHTML: string;
    /** Setup Actions * */
    /**
    * addTo - Adds the costume to the sprite
    *
    * @example
    * let sprite = new blockLike.Sprite();
    * let costume = new blockLike.Costume();
    *
    * costume.addTo(sprite);
    *
    * @param {object} sprite - which sprite to add the costume too.
    */
    addTo(sprite: object): void;
    /**
    * removeFrom - Removes the costume from to the sprite
    *
    * @example
    * let sprite = new blockLike.Sprite();
    * let costume = new blockLike.Costume();
    *
    * costume.addTo(sprite);
    * costume.removeFrom(sprite);
    *
    * @param {object} sprite - which sprite to remove the costume from.
    */
    removeFrom(sprite: object): void;
    /** Looks * */
    /**
    * resizeToImage - sets the width and height of the costume to that of the image file.
    *
    * @example
    * let costume = new blockLike.Costume({
    *   image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Sheep_in_gray.svg'
    * });
    *
    * costume.resizeToImage();
    */
    resizeToImage(): void;
    /**
    * inner - Places an HTML element inside the costume.
    *
    * @example
    * let costume = new blockLike.Costume();
    *
    * costume.inner('<p class="big centered rainbow">:)</p>');
    *
    * @example
    * costume.inner('I like text only');
    *
    * @param {string} html - the html to insert.
    */
    inner(html: string): void;
    /**
    * insert - Places a DOM element inside the costume.
    *
    * @example
    * let costume = new blockLike.Costume();
    *
    * costume.insert(document.getElementById('my-html-creation'));
    *
    * @param {object} el - the DOM element.
    */
    insert(el: object): void;
}
import Look from './look';
//# sourceMappingURL=costume.d.ts.map