import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

const Info = ({ linkPage, linkPageName }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muter mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem blanditiis enim quo laborum minima qui, quos veritatis atque harum sit mollitia. Quisquam amet eum, cupiditate accusamus earum alias ullam distinctio sint iure quod odit facilis temporibus aspernatur harum veritatis laudantium, culpa, unde repellat voluptates eligendi impedit dicta. Natus, obcaecati in!
            </p>
            <Link to={linkPage}>
              <button className="btn text-uppercase btn-yellow">{linkPageName}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;