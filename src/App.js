import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import data from './Components/Data'
import Card from './Components/Card';
import Pract from './Components/pract';
import { Col, Row } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      <Header headerType={'Product first Header'} headerColor={'#000'}></Header>
      <Header headerType={'Product second Header'} headerColor={'#ff0000'} color={'yellow'}></Header>

      <div>
        <Row>
          {
            data.map((item) => {
              return (
                <Col md={3}>
                  <Card fruitName={item.fruitName} price={item.price} discount={item.discount} />
                </Col>
              )
            })
          }
        </Row>
      </div>

      <Footer />
      <div className="ball-cont">
        <Pract bgColor={'red'} text={'first'} color={'yellow'} bgColorSmall={'linear-gradient(to bottom right, white, blue)'} />
        <Pract bgColor={'green'} text={'second'} color={'orange'} bgColorSmall={'yellow'} />
        <Pract bgColor={'yellow'} text={'third'} color={'reen'} bgColorSmall={'red'} />
        <Pract bgColor={'purple'} text={'fourth'} color={'pink'} bgColorSmall={'orange'} />
      </div>
    </div>
  );
}

export default App;


// import { getImageUrl } from './Components/utils';

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: 'Aklilu Lemma',
//           imageId: 'OKS67lh'
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6'
//         }}
//       />
//     </div>
//   );
// }


