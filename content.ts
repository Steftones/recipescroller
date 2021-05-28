// get all nodes on a page
const allNodes: HTMLElement[] = Array.from(document.querySelectorAll('*'))

// get 'Time:' first - most likely thing to indicate the start
const timeNodes = []
for (let i = 0; i < allNodes.length; i++){
  if (String(allNodes[i].innerText).toLowerCase().includes('time:')){
    timeNodes.push(allNodes[i])
  }
}

// get titles that have 'ingredient' in them
let scrollNodes: HTMLElement[] = []
const elementsToSearch = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
for (let i = 0; i < allNodes.length; i++){
  if (elementsToSearch.includes(allNodes[i].nodeName) && allNodes[i].innerText.toLowerCase().includes('ingredient')){
    scrollNodes.push(allNodes[i])
  } else if (String(allNodes[i].className).includes('ingredient')){
    scrollNodes.push(allNodes[i])
  }
}

// put 'Time:' thing at the start - it's the most important
if (timeNodes.length > 0){
  scrollNodes = [timeNodes[timeNodes.length - 1], ...scrollNodes]
}

let rIndex = 0
let nodeIndex = 0

// scrolling to the correct element
document.addEventListener('keydown', (e): void => {
  if (scrollNodes.length === 0) return 
  if (e.key === 'r') {
    rIndex++
    if (rIndex === 2) {     
      scrollNodes[nodeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
      nodeIndex === scrollNodes.length - 1 ? nodeIndex = 0 : nodeIndex++
      rIndex = 0
    }
  } else {
    rIndex = 0
  }
})