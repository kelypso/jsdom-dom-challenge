document.addEventListener('DOMContentLoaded', function() {
    // Increment timer every second once page loads
    const counter = document.querySelector('h1#counter')
    let paused = false;
    
    setInterval(function() {
        if (paused === false) {
            counter.innerText++
        }
    }, 1000)

    // Manually increment and decrement counter using plus/minus buttons
    let plus = document.querySelector('button#plus')
    let minus = document.querySelector('button#minus')
    
    plus.addEventListener('click', () => counter.innerText++)
    minus.addEventListener('click', () => counter.innerText--)

    // 'Like' a specific num of the counter
    let likes = document.querySelector('button#heart')
    let listLikes = {}
    
    likes.addEventListener('click', function() {
        let currentNum = counter.innerText

        if (listLikes[currentNum]) {
            listLikes[currentNum] += 1
        } else {
            listLikes[currentNum] = 1
        }
        renderLikes()
    })

    // Show count of 'likes' for that num
    let showLikes = document.querySelector('ul.likes')
    
    function renderLikes() {
        showLikes.innerText = ''
        for (var num in listLikes) {
            let number = num
            let likeCount = listLikes[num]
            let li = document.createElement('li')
            li.innerText = `${number} has ${likeCount} likes`
            showLikes.appendChild(li)
        }
    }

    // Pause the counter does the following...
    // Disable all buttons besides pause
    // Pause button says 'resume'
    // Resume click restarts the counter and re-enables all buttons
    let pause = document.querySelector('button#pause')
    let btns = [document.querySelector('button#plus'), 
                document.querySelector('button#minus'), 
                document.querySelector('button#heart')]

    pause.addEventListener('click', function() {
        if (paused === false) {
            paused = true
            pause.innerText = 'resume'
            btns.forEach(btn => btn.disabled = true)
        } else {
            paused = false
            pause.innerText = 'pause'
            btns.forEach(btn => btn.disabled = false)
        }
    })

    // Can leave comments
    let comment = document.querySelector('form#comment-form')

    comment.addEventListener('submit', function(e) {
        e.preventDefault()
        let input = document.querySelector('input#comment-input')
        let div = document.querySelector('div.comments')

        let text = document.createElement('text')
        text.innerText = input.value 
        div.appendChild(text)

        input.value = ''
    })

})