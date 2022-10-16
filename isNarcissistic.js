function isNarcissistic (value) {
    const arr = value.toString()
    const arrLength = arr.length
    let summ = 0

    for (i = 0; i < arr.length; i++) {
        summ += arr[i] ** arrLength
    }
    summ == value ? return true : return false 
}

isNarcissistic(371)
