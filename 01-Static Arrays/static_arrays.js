class StaticArray {
  insertAtEnd(arr, n, length, capacity) {
    if (length < capacity) {
      arr[length] = n;
    }
  }
  removeAtEnd(arr, length) {
    if (length > 0) {
      arr[length - 1] = 0;
      length--;
    }
  }
  insertAtMiddle(arr, i, n, length) {
    for (let index = length - 1; index > i - 1; index--) {
      arr[index + 1] = arr[index];
    }
    arr[i] = n;
  }
  removeFromMiddle(arr, i, length) {
    for (let index = i + 1; index < length; index++) {
      arr[index - 1] = arr[index];
    }
  }
  printArray(arr, length) {
    let arrayValue = "";
    for (let ind = 0; i < length; i++) {
      arrayValue += arr[i] + "";
    }
    console.log(arrayValue);
  }
}
