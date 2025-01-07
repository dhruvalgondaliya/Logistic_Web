import { ServiceCard } from './ServiceCard';

const services = [
  {
    title: 'Wholesale FBA Prep',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/FBA1.webp?alt=media&token=843e2c4d-727c-41c5-9558-bb68aa6f662b',
    details: [
      'Warehouse & FBA Prep Services streamline product preparation for Amazon FBA. We manage receiving, labeling, packaging, and shipping, ensuring fast processing and compliance with Amazon’s guidelines for efficient scaling.'
    ]
  },
  {
    title: 'Private Labeling',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/ServicesPri.jpg?alt=media&token=1c529443-99c8-4b71-846a-82bbeee3e44d',
    details: [
      'Order Processing',
      'Pick & Pack Services',
      'Same-day Shipping',
      'Returns Management',
      'Real-time Tracking'
    ]
  },
  {
    title: 'Online Arbitrage',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/OnlineSer.webp?alt=media&token=7e35191f-2bd4-452d-b743-74ce4e5b3e91',
    details: [
      'Global Shipping',
      'Custom Packaging',
      'Address Verification',
      'Shipping Insurance',
      'Bulk Shipping'
    ]
  }
  ,
  {
    title: 'Retail Arbitrage',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/RetailSer.webp?alt=media&token=646ee23c-8f02-4b0f-828b-3b4fd2a8ee5b',
    details: [
      'Global Shipping',
      'Custom Packaging',
      'Address Verification',
      'Shipping Insurance',
      'Bulk Shipping'
    ]
  },
  {
    title: 'Fulfillment By Merchant (FBM)',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/FBM2.webp?alt=media&token=a6626866-0bd6-43af-ad8f-ee68d205bdfd',
    details: [
      'Global Shipping',
      'Custom Packaging',
      'Address Verification',
      'Shipping Insurance',
      'Bulk Shipping'
    ]
  },
  {
    title: 'Fulfillment Services & Shipping',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-crud-beb70.appspot.com/o/Service3.webp?alt=media&token=30f16e25-97bf-4062-a281-e5cfeaaae681',
    details: [
      'Global Shipping',
      'Custom Packaging',
      'Address Verification',
      'Shipping Insurance',
      'Bulk Shipping'
    ]
  }
];


const ServicesSection1: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
    <div className="text-center mb-12">
      <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">OUR SERVICES</h2>
      <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        We Provide The Necessary<br />Services To You
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          imageUrl={service.imageUrl}
          details={service.details}
        />
      ))}
    </div>
  </div>
  );
};

export default ServicesSection1;