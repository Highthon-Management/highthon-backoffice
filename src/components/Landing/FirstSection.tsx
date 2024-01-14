import LandingLayout from './Layout';
import Intro from '../../assets/intro.gif';

// TODO: 애니메이션 추가
const FirstSection = () => {
  return (
    <LandingLayout
      backgroundColor="skyblue"
      backgroundImage={
        <img
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          src={Intro}
          alt="first-gif"
        />
      }
    >
      <></>
    </LandingLayout>
  );
};

export default FirstSection;
