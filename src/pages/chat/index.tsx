import ChatLayout from "@/components/shared/chat";
import { NextPageWithLayout } from "@/pages/_app";

const Chat: NextPageWithLayout = () => {
  return <>asd</>;
};

Chat.getLayout = (page: React.ReactElement) => {
  return <ChatLayout>{page}</ChatLayout>;
};

export default Chat;
