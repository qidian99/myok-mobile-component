import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native'

function Example(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  });
  return (<View>
    <Text>Count incremented {count} times</Text>
  </View>)
}


export default Example
