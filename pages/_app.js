import App from 'next/app';
import { ThemeProvider } from '../src/shared/common/Theme';
import { Layout } from '../src/shared/components/Layout';
import './styles.css';

export default class Entry extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    );
  }
}
