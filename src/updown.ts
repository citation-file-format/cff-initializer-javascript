function moveUpdate<Type> (index: number, value: number, array: Type[], updateArray: (a: Type[]) => void): void {
    const newArray: Type[] = [...array]
    newArray[index] = newArray.splice(index + value, 1, newArray[index])[0]
    updateArray(newArray)
}

export function moveDown<Type> (index: number, array: Type[], updateArray: (a: Type[]) => void): void {
    if (index === array.length - 1) return
    moveUpdate(index, 1, array, updateArray)
}

export function moveUp<Type> (index: number, array: Type[], updateArray: (a: Type[]) => void): void {
    if (index === 0) return
    moveUpdate(index, -1, array, updateArray)
}
