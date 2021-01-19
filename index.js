

//I will make an object and have the array values as the object key
//and the times repeated as the key value.
// EX: [1,1,2,2,2,3,4,4,5] | object:{ '1':2, '2':3, '3':1, '4':2, '5':1}
//I then return any object key less then or equal to the number given 'n'
function deleteNth(arr, n) {
      var valueStorageList = {};


      //This logs it into the console for human eyes
      console.log(arr.filter(x => {
            valueStorageList[x] = (valueStorageList[x] || 0) + 1;
            return valueStorageList[x] <= n;
      }));


      //This returns the solution
      return arr.filter(x => {
            valueStorageList[x] = (valueStorageList[x] || 0) + 1;
            return valueStorageList[x] <= n;
      });
}



//Test Cases

deleteNth([20, 37, 20, 21], 1) // Expected Result [20,37,21]
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3) // Expected Result [1, 1, 3, 3, 7, 2, 2, 2
deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3) // Expected Result [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5]
deleteNth([1, 1, 1, 1, 1], 5) // Expected Result [1,1,1,1,1]
deleteNth([], 5) // Expected Result []