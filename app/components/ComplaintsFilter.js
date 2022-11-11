import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import DatePicker from "react-native-date-ranges";
import DropDownPicker from "react-native-dropdown-picker";

function ComplaintsFilter({ onChangeFilter, onBackdropClick }) {
  const [dateRange, setdateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [status, setstatus] = useState(null);
  const [statusArr, setstatusArr] = useState([
    { label: "Pending", value: "Pending" },
    { label: "Resolved", value: "Resolved" },
    { label: "Any", value: "Any" },
  ]);
  const [statusOpen, setstatusOpen] = useState(false);

  //set filter
  const setFilter = () => {
    onChangeFilter({
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      status,
    });
    onBackdropClick();
  };

  //clear selected filters
  const clearFilter = () => {
    setdateRange({ startDate: "", endDate: "" });
    setstatus("Any");
    onChangeFilter({
      startDate: "",
      endDate: "",
      status: null,
    });
    onBackdropClick();
  };

  //confirm button for date range picker
  const dateConfirmBtn = (onSet) => {
    return <Button onPress={onSet} title={"Set Date Range"} />;
  };

  //called on date range select
  const onConfirmDate = (dateRange) => {
    setdateRange({
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    });
  };
  return (
    <View style={styles.container}>
      <Pressable style={{ flex: 1 }} onPress={onBackdropClick} />
      <View style={styles.content}>
        <DatePicker
          style={styles.inputText}
          customStyles={{
            placeholderText: { fontSize: 18, color: "#4A4A4A" },
            headerStyle: { backgroundColor: "#2AB9FE" },
          }}
          centerAlign
          allowFontScaling={false}
          placeholder={"Date Range"}
          mode={"range"}
          markText="Date Range"
          customButton={dateConfirmBtn}
          onConfirm={onConfirmDate}
          returnFormat="YYYY-MM-DD"
        ></DatePicker>
        <DropDownPicker
          placeholder="Status"
          open={statusOpen}
          value={status}
          items={statusArr}
          setOpen={setstatusOpen}
          setValue={setstatus}
          setItems={setstatusArr}
          listMode="SCROLLVIEW"
          dropDownContainerStyle={styles.dropDownContainer}
          style={styles.dropDown}
          selectedItemLabelStyle={styles.dropDownSelected}
          arrowIconStyle={{ color: "#A4A4A4" }}
          labelStyle={styles.dropDownLabel}
          listItemLabelStyle={styles.dropDownLabel}
          placeholderStyle={styles.dropDownPlaceholder}
        />
        <TouchableNativeFeedback onPress={setFilter}>
          <View style={styles.setBtn}>
            <Text style={{ fontSize: 18, color: "#fff" }}>Set Filter</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={clearFilter}>
          <View style={styles.clearBtn}>
            <Text style={{ fontSize: 18, color: "#000" }}>Clear Filter</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: "rgba(45, 45, 45, 0.8)",
  },
  content: {
    backgroundColor: "#fff",
    padding: 10,
  },
  inputText: {
    backgroundColor: "#F3F1F1",
    height: 60,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
    color: "#4A4A4A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0,
  },
  inputLabel: {
    color: "#4A4A4A",
    fontSize: 18,
  },
  placeholder: {
    color: "#b5b5ba",
    fontSize: 18,
  },
  setBtn: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#42A5F5",
    borderRadius: 5,
    marginBottom: 10,
  },
  clearBtn: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A4A4A4",
    borderRadius: 5,
  },
  dropDown: {
    backgroundColor: "#F3F1F1",
    height: 60,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 0,
    color: "#4A4A4A",
  },
  dropDownContainer: {
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dropDownSelected: {
    color: "#2AB9FE",
  },
  dropDownLabel: {
    color: "#4A4A4A",
    fontSize: 18,
  },
  dropDownPlaceholder: {
    color: "#4A4A4A",
    fontSize: 18,
  },
});

export default ComplaintsFilter;
