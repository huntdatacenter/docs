const md = require('@vuepress/markdown')();

function stripQuotes(s) { 
  return ( s || '' ).replace( /^"|"$/g, '' ); 
}
  
function getAttrs(val) {
    if (val && !val.includes('=')) {
        return {title: stripQuotes(val.trim())}
    }
    return Object.fromEntries(val
        // sanitize input
        .trim()
        // parse into array
        .split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g)
        // normalize title attribute
        .map(attr => {
            if (attr.includes("=")) {
            return attr.split('=').map(item => stripQuotes(item));
            }
            return ["title", stripQuotes(attr)];
        }));
}

function getTitle(val, xattrs = null) {
    const attrs = xattrs ? xattrs : getAttrs(val)
    return attrs && attrs['title'] ? attrs['title'] : ""
}

// Slug prefix #detail- has to be applied in enhanceApp also.
function getSlug(val) {
    const attrs = getAttrs(val)
    return attrs && attrs['id'] ? `detail-${attrs['id']}` : `detail-${md.slugify(getTitle(val, attrs))}`
}

module.exports.getTitle = getTitle
module.exports.getSlug = getSlug
