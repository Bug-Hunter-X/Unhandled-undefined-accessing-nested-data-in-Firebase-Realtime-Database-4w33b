function handleData(snapshot) {
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Accessing a property that might not exist
    const value = data.someProperty;
    console.log(value); 
  } else {
    console.log('No data available');
  }
}