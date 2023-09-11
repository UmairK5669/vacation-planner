import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const AvailabilityInput = () => {
  const [selectedDates, setSelectedDates] = useState({});

  const handleDayPress = (day) => {
    const date = day.dateString;
    setSelectedDates({ ...selectedDates, [date]: { selected: true } });
  };

  const handleSubmit = () => {
    // Process the selected dates here
    // You can save them in a suitable data structure or state
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={selectedDates}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AvailabilityInput;
