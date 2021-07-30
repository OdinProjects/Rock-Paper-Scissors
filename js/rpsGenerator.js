const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"]
    const ind = Math.floor(Math.random() * 3)
    return options[ind]
}

export {computerPlay}