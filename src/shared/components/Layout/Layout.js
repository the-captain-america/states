import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const DarkStyle = css`
  box-shadow: 11px 0px 12px 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
    45deg,
    #44484d 1%,
    #313539 1%,
    #313539 49%,
    #44484d 49%,
    #44484d 51%,
    #313539 51%,
    #313539 99%,
    #44484d 99%
  );
  background-size: 16px 16px;
  background-position: 0 0;
  background-color: #313539;
`;

const FooterContainer = styled.div`
  ${DarkStyle};
  padding-top: 24px;
  padding-bottom: 24px;
  margin-top: 48px;
  div.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid white;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 8px;
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }
    a {
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      line-height: 24px;
      font-weight: 300;
      font-size: 14px;
    }
  }
  div.copy {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
      font-weight: 300;
      padding-top: 8px;
      color: white;
      font-size: 14px;
      line-height: 24px;
      padding-bottom: 8px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="row">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>Courses</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="copy">
        <span>Copyright &#169;2020</span>
      </div>
    </FooterContainer>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Managing States" />
        <title>States</title>
      </Head>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700"
        />
      </Head>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
