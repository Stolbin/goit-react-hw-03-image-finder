import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

function Loader() {
  return (
    <LoaderContainer>
      <ThreeCircles
        height="150"
        width="150"
        color="#ffa500"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </LoaderContainer>
  );
}

export default Loader;
