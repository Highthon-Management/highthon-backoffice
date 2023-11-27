import styled from 'styled-components';
import BackgroundImage from '../../assets/BottomCloud.png';

const BackgroundCloud = () => <Background />;

const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  bottom: 0px;
  position: absolute;
  width: 100vw;
  height: 100%;
`;

export default BackgroundCloud;
