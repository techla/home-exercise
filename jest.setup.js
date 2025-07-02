import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isReady: true,
    };
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props) {
    const allowedProps = {};
    
    const validImgAttributes = [
      'src', 'alt', 'width', 'height', 'className', 'style', 'id', 
      'onLoad', 'onError', 'onClick', 'onMouseEnter', 'onMouseLeave'
    ];
    
    validImgAttributes.forEach(attr => {
      if (props[attr] !== undefined) {
        allowedProps[attr] = props[attr];
      }
    });
    
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...allowedProps} alt={props.alt || ''} />;
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, ...props }) => {
    return <a {...props}>{children}</a>;
  },
}));
