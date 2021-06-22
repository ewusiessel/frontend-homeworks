import {Col, Container, Row} from "react-bootstrap";


const HomePageNav = function (props) {

    return (
        <Container>
            <div className="pageContent">
                <Row className="navList">
                    <Col l={{span: 6, offSet: 3}}>
                        <ul className="unorderedList">

                            <li className="mx-3 text-white active">TRENDING</li>


                            <li className="mx-3 text-white">PODCAST</li>


                            <li className="mx-3 text-white">MOODS AND GENRES</li>


                            <li className="mx-3 text-white">NEW RELEASES</li>


                            <li className="mx-3 text-white">DISCOVER</li>

                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};


export default HomePageNav;





