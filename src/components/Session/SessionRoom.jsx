import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
function SessionRoom() {
  const { auth, setAuth } = useContext(AuthContext);
  const { userData, accessToken } = auth;
  const { roomId } = useParams();
  const myMeeting = async (element) => {
    // generate Kit Token
    const appID = 705305494;
    const serverSecret = "16b87a50394bbc90e7fe3e4ddcabba39";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      userData.firstName
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
}

export default SessionRoom;
