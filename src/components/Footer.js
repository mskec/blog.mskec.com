import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://mobile.twitter.com/_mskec"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/mskec"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://stackoverflow.com/users/2078522/martin-skec"
          target="_blank"
          rel="noopener noreferrer"
        >
          stack overflow
        </a>{' '}
        &bull;{' '}
        <a
          href="https://cookbook.mskec.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          cookbook
        </a>
      </footer>
    );
  }
}

export default Footer;
