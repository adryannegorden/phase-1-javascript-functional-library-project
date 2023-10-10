// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }
  
  // myReduce
function myReduce(collection, callback, acc) {
    let startIndex = 0;
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIndex = 1;
      } else {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        startIndex = 1;
      }
    }
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        acc = callback(acc, collection[key], key, collection);
      }
    }
    return acc;
  }
  
  
  // myFind
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  // myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const valueA = callback(a);
      const valueB = callback(b);
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat(...array);
    }
    for (let item of array) {
      if (Array.isArray(item)) {
        myFlatten(item, false, newArr);
      } else {
        newArr.push(item);
      }
    }
    return newArr;
  }
  
  // Object Functions
  
  // myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues
  function myValues(object) {
    return Object.values(object);
  }
  