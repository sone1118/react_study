import React, { Component } from 'react';
import * as Sentry from '@sentry/react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  //에러가 발생한 상황에 이 함수가 먼저 호출이 된다.
  componentDidCatch(error, info) {
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info,
    });
    this.setState({
      error: true,
    });

    //프로덕션 즉 build한 다음에는
    //compenetDidCatch로 에러를 잡아준 상태에서는 sentry에서 에러를 확인 할 수 없다
    //프로덕션에서도 sentry를 통해 에러를 확인 해 줄 수 있는데 captureException 이라는 함수를 사용

    if (process.env.NOD_ENV === 'production') {
      Sentry.captureException(error, { extra: info });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

//render 부분의 return this.props.children 이란
// ErrorBoundary로 감싼 부분을 그대로 보여주겠다 라는 의미
/*
    <ErrorBoundary>
        <User2 />
    </ErrorBoundary>
 */
