// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(
  //   '587ada16-c867-4ee9-98fe-a940745f53aa',
  //   props.user.username,
  //   props.user.secret
  // );
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="587ada16-c867-4ee9-98fe-a940745f53aa"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      ></PrettyChatWindow>
    </div>

    // <div style = {{ height: '100vh' }}>
    //   {/* <MultiChatSocket {...chatProps}/>
    //   <MultiChatWindow {...chatProps} style={{ height: '100%'}}/> */}
    // </div>
  );
};

export default ChatsPage;
