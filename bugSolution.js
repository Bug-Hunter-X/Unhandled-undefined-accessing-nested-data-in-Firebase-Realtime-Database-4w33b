function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Safe access using optional chaining
    const value = data?.someProperty;
    if (value !== undefined) {
       console.log(value);
    } else {
       console.log('someProperty does not exist');
    }
  } else {
    console.log('No data available');
  }
}