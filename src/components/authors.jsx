import React from 'react';

export default class Authors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.authors || !this.props.affiliations) {
      return null;
    }
    // Size each name to its content and wrap between names, never inside one.
    // Equal-width columns (1/n of the row) broke long names over two lines.
    const authorClass =
      'uk-width-auto uk-padding-small uk-padding-remove-vertical';
    const affiliationClass =
      'uk-width-auto uk-padding-small uk-padding-remove-vertical uk-margin-small-top';
    return (
      <div>
        <div
          className="uk-text-primary uk-text-center uk-flex-center uk-grid-collapse"
          data-uk-grid
        >
          {this.props.authors.map((author, idx) => {
            // equal contribution / internship / joint last author markers
            const marks = [].concat(author.mark ?? author.marks ?? []);
            // On wide screens split a long author list into two balanced rows
            // (e.g. 3 + 3) instead of leaving the last name alone on a line.
            const half = Math.ceil(this.props.authors.length / 2);
            const rowBreak =
              this.props.authors.length > 4 && idx === half ? (
                <div className="uk-width-1-1 uk-visible@s" />
              ) : null;
            return (
              <React.Fragment key={'author-' + idx}>
                {rowBreak}
                <span className={authorClass} style={{ whiteSpace: 'nowrap' }}>
                  <a
                    target="_blank"
                    className="uk-link-toggle"
                    href={author.url}
                  >
                    {author.name}
                  </a>
                  <sup>
                    {author.affiliation.join(',')}
                    {marks.join('')}
                  </sup>
                </span>
              </React.Fragment>
            );
          })}
        </div>
        <div
          className="uk-text-primary uk-text-center uk-flex-center uk-grid-collapse"
          data-uk-grid
        >
          {this.props.affiliations.map((affiliation, idx) => {
            return (
              <span
                className={affiliationClass}
                style={{ whiteSpace: 'nowrap' }}
                key={'affiliation-' + idx}
              >
                <sup>{idx + 1}</sup>
                {affiliation}
              </span>
            );
          })}
          {/* one note per line: equal contribution, internship, joint last authors, ... */}
          {[].concat(this.props.meta ?? []).map((note, idx) => (
            <span className="uk-width-1-1" key={'meta-' + idx}>
              {note}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
