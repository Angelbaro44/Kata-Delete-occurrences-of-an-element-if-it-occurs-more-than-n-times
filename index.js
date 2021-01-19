//I will make an object and have the array values as the object key
//and the times repeated as the key value.
// EX: [1,1,2,2,2,3,4,4,5] | object:{ '1':2, '2':3, '3':1, '4':2, '5':1}
//I then return any object key less then or equal to the number given 'n'


function deleteNth(arr, n) {
      var valueStorageList = {};
      return arr.filter(x => {
            valueStorageList[x] = (valueStorageList[x] || 0) + 1;
            return valueStorageList[x] <= n;
      });
}