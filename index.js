// Add your functions and code here
function destructivelyAppendKitten(name) {
    kittens.push(name)
}

function destructivelyPrependKitten() {
    kittens.unshift()
}

function destructivelyRemoveLastKitten() {
    kittens.pop()
}

function destructivelyRemoveFirstKitten() {
    kittens.shift()
}

function appendKitten() {
    return kittens.slice(0,-1)
}
