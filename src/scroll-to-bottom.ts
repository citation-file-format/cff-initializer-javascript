export const scrollToBottom = (targetClass = 'bottom') => {
    document.getElementsByClassName(targetClass)[0].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
    })
}
