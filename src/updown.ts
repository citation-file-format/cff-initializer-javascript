export function moveDown<Type> (index: number, array: Type[], updateArray: (a: Type[]) => void): void {
    if (index === array.length - 1) return
    const newArray: Type[] = [...array]
    newArray[index] = newArray.splice(index + 1, 1, newArray[index])[0]
    updateArray(newArray)
}

export function moveUp<Type> (index: number, array: Type[], updateArray: (a: Type[]) => void): void {
    if (index === 0) return
    const newArray: Type[] = [...array]
    newArray[index] = newArray.splice(index - 1, 1, newArray[index])[0]
    updateArray(newArray)
}
