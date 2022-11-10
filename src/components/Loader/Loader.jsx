import { createPortal } from 'react-dom';

import { LoaderWrapper } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  const loaderComponent = (
    <LoaderWrapper>
      <Oval
        height={80}
        width={80}
        color="rgb(28, 86, 156)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="acquawhite"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </LoaderWrapper>
  );

  const loaderRoot = document.getElementById('loader-root');

  return createPortal(loaderComponent, loaderRoot);
};

export default Loader;
