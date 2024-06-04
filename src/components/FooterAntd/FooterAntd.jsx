import { Layout } from 'antd';
const { Footer } = Layout;

const FooterAntd = () => {
  return (
    <Footer className="text-center">
      Store ©{new Date().getFullYear()} Created by Khang Nguyen
    </Footer>
  );
};

export default FooterAntd;
