// Code your solution here
function findMatching(arr,name) {
    const ans = arr.filter(item => {
        if(item.toUpperCase() === name.toUpperCase()){
            return item
        }
        
    })
    return ans
}
function fuzzyMatch(arr,name) {
    return arr.filter(item => item.startsWith(name))
}
function matchName(arr,str) {
    return arr.filter(item => item.name === str)
}