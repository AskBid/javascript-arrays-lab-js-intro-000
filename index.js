// Add your functions and code here
function destructivelyAppendKitten(name) {
    kittens.push(name)
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
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
