
import React from 'react';
import {Link} from 'gatsby';

export const Pagination = ({currentPage, pageCount, base}) => (
  <nav className="pagination">
    {currentPage > 1 ? (
        <Link
          className="button-primary"
          title="page précédente"
          to={`${base}/page/${currentPage - 1}`}>
          ← newer posts
        </Link>) :
      <span />}
    page {currentPage} of {pageCount}
    {currentPage < pageCount ? (
        <Link
          className="button-primary"
          title="page suivante"
          to={`${base}/page/${currentPage + 1}`}>
          older posts →
        </Link>) :
      <span />}
  </nav>
);

