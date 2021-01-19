function deleteNth(arr, n) {
      var valueStorageList = {};
      return arr.filter(x => {
            valueStorageList[x] = (valueStorageList[x] || 0) + 1;
            return valueStorageList[x] <= n;
      });
}