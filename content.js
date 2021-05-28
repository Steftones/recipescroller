var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// get all nodes on a page
var allNodes = document.querySelectorAll('*');
// get 'Time:' first - most likely thing to indicate the start
var timeNodes = [];
for (var i = 0; i < allNodes.length; i++) {
    if (String(allNodes[i].innerText).toLowerCase().includes('time:')) {
        timeNodes.push(allNodes[i]);
    }
}
// get titles that have 'ingredient' in them
var scrollNodes = [];
var elementsToSearch = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
for (var i = 0; i < allNodes.length; i++) {
    if (elementsToSearch.includes(allNodes[i].nodeName) && allNodes[i].innerText.toLowerCase().includes('ingredient')) {
        scrollNodes.push(allNodes[i]);
    }
    else if (String(allNodes[i].className).includes('ingredient')) {
        scrollNodes.push(allNodes[i]);
    }
}
// put 'Time:' thing at the start - it's the most important
if (timeNodes.length > 0) {
    scrollNodes = __spreadArray([timeNodes[timeNodes.length - 1]], scrollNodes);
}
var rIndex = 0;
var nodeIndex = 0;
// scrolling to the correct element
document.addEventListener('keydown', function (e) {
    if (scrollNodes.length === 0)
        return;
    if (e.key === 'r') {
        rIndex++;
        if (rIndex === 2) {
            scrollNodes[nodeIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'start'
            });
            nodeIndex === scrollNodes.length - 1 ? nodeIndex = 0 : nodeIndex++;
            rIndex = 0;
        }
    }
    else {
        rIndex = 0;
    }
});
