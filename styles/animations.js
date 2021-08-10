import { keyframes } from "@emotion/react";

const animFromBottom = keyframes`
  from  {
    transform:translate3d(0rem, 150%, 0rem);
  }

  to {
    transform:translate3d(0rem, 0, 0rem);
  }
`;

const animToTop = keyframes`
  from  {
    transform:translate3d(0rem, 0, 0rem);
  }

  to {
    transform:translate3d(0rem, -150%, 0rem);
  }
`;

const animRotateFromTop = keyframes`
  from  {
    transform: rotateX(-90deg) translate3D(0,-100%,0);
    opacity: 0;
  }

  to {
    transform: rotateX(0deg) translate3D(0,0,0);
    opacity: 1;
  }
`;

const animRotateToBottom = keyframes`
  from  {
    transform: rotateX(0deg) translate3D(0,0,0);
    opacity: 1;
  }

  to {
    transform: rotateX(90deg) translate3D(0,100%,0);
    opacity: 0;
  }
`;

const animSwipeFromLeft3D = keyframes`
  from  {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(-50%, 0%, 0rem);
    opacity: 0;
    z-index: 1;
  }

  to {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(0rem, 0%, 0rem);
    opacity: 1;
    z-index: 100;
  }
`;

const animSwipeFromRight3D = keyframes`
  from  {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(100%, 0%, 0);
    opacity: 0;
    z-index: 1;
  }
  to {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(0rem, 0%, 0rem);
    opacity: 1;
    z-index:100;
  }
`;

const animSwipeToLeft3D = keyframes`
  from {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(0rem, 0%, 0rem);
    opacity: 1;
    z-index: 100;
  }

  to  {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(-50%, 0%, 0rem);
    opacity: 0;
    z-index: 1;
  }
`;

const animSwipeToRight3D = keyframes`
  from {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(0rem, 0%, 0rem);
    opacity: 1;
    z-index:100;
  }

  to  {
    transform: rotate3d(0.6, -0.4, 0.2, 32deg) translate3d(100%, 0%, 0);
    opacity: 0;
    z-index: 1;
  }
`;

const animWidth = keyframes`
  from  {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const animFadeIn = keyframes`
  from  {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const animFadeOut = keyframes`
  from  {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const animeaseOutBounce = keyframes`
	0% {
		transform: scale(1);
	}

	12% {
		transform: scale(0.89);
	}

	24% {
		transform: scale(0.56);
	}

	36% {
		transform: scale(0.02);
	}

	54% {
		transform: scale(0.25);
	}

	74% {
		transform: scale(0.02);
	}

	82% {
		transform: scale(0.06);
	}

	92% {
		transform: scale(0.01);
	}

	96% {
		transform: scale(0.02);
	}

	100% {
		transform: scale(0);
	}
`;

export {
  animFromBottom,
  animToTop,
  animRotateFromTop,
  animRotateToBottom,
  animSwipeFromLeft3D,
  animSwipeToRight3D,
  animSwipeFromRight3D,
  animSwipeToLeft3D,
  animWidth,
  animFadeIn,
  animFadeOut,
  animeaseOutBounce,
};
