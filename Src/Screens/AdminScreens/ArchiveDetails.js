import React from "react";
import { View, Text } from "react-native";
import CaseDetailsTopHeader from "../../Components/CaseDetailsTopHeader";
import CaseNumber from "../../Components/CaseNumber";
import InviteandSupportComponent from "../../Components/InviteandSupportComponent";
import ImagesFlatlist from "../../Components/ImagesFlatlist";
import LocationDetailsComponent from "../../Components/LocationDetailsComponent";
import ColorStyles from "../../Colors/ColorStyles";
const ArchiveDetails = ({ navigation, route }) => {
  const item = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <CaseDetailsTopHeader />
      <CaseNumber caseno={item.caseno} />
      <View style={{ height: "5%" }}></View>
      <InviteandSupportComponent
        invite={item.invitesent}
        support={item.support}
      />
      <ImagesFlatlist />
      <LocationDetailsComponent description={item.description} />
      <View style={{ height: "5%" }}></View>
      <Text style={{ fontSize: 14, color: ColorStyles.redColor }}>
        This is the description of case will be written by user
      </Text>
    </View>
  );
};

export default ArchiveDetails;