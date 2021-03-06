import ChakaPhoto from '../../../assets/projects/chaka.jpg';
import HotelCaliforniaPhoto from '../../../assets/projects/hotel-california.jpg';
import MallOnPhoto from '../../../assets/projects/MallOn.jpg';
const projectDetails = [
  {
    title: 'Chaka - A Dream Car Project',
    description:
      'Users can create an order and give reviews from the User Dashboard. Admin control which gives access to all product managements and orders of all users. A dynamic dashboard for managing orders, adding products, and more.',
    image: ChakaPhoto,
    tags: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'React-Router',
      'Firebase-Auth',
      'React-bootstrap',
      'React-icons',
      'heroku',
    ],
    previewLink: 'https://chaka101.web.app/',
    githubClint: 'https://github.com/mdshemul48/Chaka-car-shop-frontend',
    githubServer: 'https://github.com/mdshemul48/Chaka-car-shop-backend',
  },
  {
    title: 'Hotel California - Hotel booking Site',
    description:
      'Customer reservations are added to the database and loaded separately for every user. Authorized clients can book and cancel reservations. Admin can add a new or delete an existing room.',
    image: HotelCaliforniaPhoto,
    tags: [
      'Node',
      'React',
      'Express',
      'MongoDB',
      'React-Router',
      'Firebase-Auth',
      'React-bootstrap',
      'heroku',
    ],
    previewLink: 'https://hotel-california101.web.app/',
    githubClint: 'https://github.com/mdshemul48/Hotel-California-Frontend',
    githubServer: 'https://github.com/mdshemul48/Hotel-California-backend',
  },
  {
    title: 'MallOn - Medical & Healthcare',
    description:
      'MallOn is a professional dynamic single-page web application where users can view details of Healthcare products. Integrated with the private route where a user needs to login for view protected route. Authorized users can view product details information after login.',
    image: MallOnPhoto,
    tags: [
      'React',
      'React-Router',
      'Firebase-Auth',
      'React-bootstrap',
      'react-icons',
      'react-leaflet',
      'axios',
    ],
    previewLink: 'https://mallmed-101.web.app/',
    githubLink: 'https://github.com/mdshemul48/MallOn-Medical-Healthcare',
  },
];

export default projectDetails;
