//check if variable is an object
const isObject = (variable) => {
    return variable && typeof variable === 'object' && !Array.isArray(variable);
  };
  
  // myEach function
  const myEach = (collection, callback) => {
    if (Array.isArray(collection) || isObject(collection)) {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  };
  
  // myMap function
  const myMap = (collection, callback) => {
    const result = [];
    myEach(collection, (value, key, collection) => {
      result.push(callback(value, key, collection));
    });
    return result;
  };
  
  // myReduce function
  const myReduce = (collection, callback, acc) => {
    let startIdx = 0;
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
    myEach(collection, (value, key, collection) => {
      acc = callback(acc, value, collection);
    });
    return acc;
  };
  
  // myFind function
  const myFind = (collection, predicate) => {
    let result;
    myEach(collection, (value, key, collection) => {
      if (predicate(value, key, collection)) {
        result = value;
        return false; // to exit the loop early
      }
    });
    return result;
  };
  
  // myFilter function
  const myFilter = (collection, predicate) => {
    const result = [];
    myEach(collection, (value, key, collection) => {
      if (predicate(value, key, collection)) {
        result.push(value);
      }
    });
    return result;
  };
  
  // mySize function
  const mySize = (collection) => {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (isObject(collection)) {
      return Object.keys(collection).length;
    } else {
      return 0;
    }
  };
  
  // Array Functions
  
  // myFirst function
  const myFirst = (array, n = 1) => {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  };
  
  // myLast function
  const myLast = (array, n = 1) => {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  };
  
  // Object Functions
  
  // myKeys function
  const myKeys = (object) => {
    return Object.keys(object);
  };
  
  // myValues function
  const myValues = (object) => {
    return Object.values(object);
  };
  