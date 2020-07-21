import React from 'react';

const StarredList = () => (
  <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
    <li>Minha lista de favoritos:</li>
    <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="https://about.gitlab.com" target="_blank" rel="noopener noreferrer">GitLab</a></li>
  </ul>
);

export default StarredList;