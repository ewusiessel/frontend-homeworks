import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar>
      <div className="container footer d-flex text-white justify-content-center">
        <div className="row px-3 fontrob">
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined ">Audio and Subtitles</li>
              <li className="underlined ">Media Center</li>
              <li className="underlined ">Privacy</li>
              <li className="underlined ">Contact us</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined ">Audio Description</li>
              <li className="underlined ">Investor Relations</li>
              <li className="underlined ">Legal Notices</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined ">Help Center</li>
              <li className="underlined ">Jobs</li>
              <li className="underlined ">Cookie Preferences</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 no-gutter">
            <ul className="list-unstyled">
              <li className="underlined ">Gift Cards</li>
              <li className="underlined ">Terms of Use</li>
              <li className="underlined ">Corporate Information</li>
            </ul>
          </div>
          <div className="col-12 no-pad">
            <div className=" button-footer my-2">Service Code</div>
          </div>
          <div>© 1997-2021 Netflix, Inc.</div>
        </div>
      </div>
    </Navbar>
  );
};

export default Footer;
