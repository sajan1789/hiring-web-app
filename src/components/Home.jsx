import React from 'react'; 
import companyLogo from '../assets/Image/bro.svg'; 
import portFolioLogo from '../assets/Image/portfolio.svg'; 
import ServiceLogo from '../assets/Image/rafiki.svg'; 
import { ArrowForwardIcon, CheckCircleIcon } from '@chakra-ui/icons'; 
import { List, ListItem, ListIcon } from '@chakra-ui/react'; 


const Homes = () => { 
  const ourServices = [ 
    { 
      id: 1, 
      title: "Talent Acquisition", 
      desc: "We specialize in connecting top talent with leading companies to help businesses find the perfect fit for their needs. Our innovative solutions ensure a smooth recruitment process from start to finish.", 
      img: ServiceLogo, 
    }, 
    { 
      id: 2, 
      title: "Employer Branding", 
      desc: "Enhance your company's reputation and attract the best candidates with our employer branding services. We help you showcase your company culture and values to stand out in the competitive job market.", 
      img: portFolioLogo, 
    }, 
    { 
      id: 3, 
      title: "Recruitment Process Outsourcing", 
      desc: "Outsource your recruitment process to us and focus on your core business. We handle everything from job postings to candidate screening, ensuring you get qualified candidates efficiently.", 
      img: ServiceLogo, 
    }, 
  ]; 

  const items = [ 
    { 
      id: 1, 
      title: "Talent Acquisition", 
      desc1: "Our talent acquisition services help businesses find and recruit top talent efficiently. We use innovative methods to connect employers with candidates who meet their specific needs.", 
      desc2: 'Our expertise in recruitment ensures a streamlined process that saves time and resources for businesses, while providing candidates with opportunities that align with their career goals.', 
    }, 
    { 
      id: 2, 
      title: "Employer Branding", 
      desc1: "We assist companies in developing a strong employer brand to attract high-quality candidates. Our services include crafting compelling job descriptions and promoting company culture.", 
      desc2: 'By enhancing your employer brand, we help you stand out in a crowded job market and attract candidates who are a perfect fit for your organization.', 
    }, 
    { 
      id: 3, 
      title: "Recruitment Process Outsourcing", 
      desc1: "Our recruitment process outsourcing (RPO) services provide businesses with a cost-effective way to manage their recruitment needs. We handle all aspects of the hiring process, from sourcing to onboarding.", 
      desc2: 'Partner with us to streamline your recruitment process, reduce hiring costs, and improve the quality of your hires.', 
    }, 
  ]; 

  return ( 
    <div className='flex flex-col items-center px-6 md:px-10 gap-8'> 
      <div className='flex flex-col md:flex-row items-center w-full'> 
        <div className='flex px-4 md:px-10 flex-col w-full md:w-[50%] gap-8'> 
          <div> 
            <h1 className="font-semibold text-3xl md:text-4xl bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent"> 
              Providing Industry Leading Solutions For 
            </h1> 
          </div> 
          <div> 
            <p>We are passionate about connecting people with opportunities. Our mission is to bridge the gap between talent and employers by providing innovative and efficient recruitment solutions that empower businesses to grow and thrive.</p> 
          </div> 
          <div> 
            
          </div> 
        </div> 
        <div className='flex items-center justify-center w-full md:w-[50%] mt-6 md:mt-0'> 
          <img src={companyLogo} alt="Company Logo" className='w-full h-auto'/> 
        </div> 
      </div> 
      <div className="flex items-center justify-center w-full"> 
        <div className="bg bg-[#EDF7FF] rounded-full flex w-full md:w-3/4 p-4 shadow-lg items-center justify-center gap-3"> 
          <div className="flex flex-col bg-white rounded-l-full text-center justify-center p-8 md:p-20 border-r-2 border-[#d4e7f3]"> 
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4"> 
              About<br />Company 
            </h1> 
          </div> 
          <div className="pl-4 md:pl-8"> 
            <p className="text-gray-600"> 
              We are dedicated to connecting talented individuals with the right job opportunities. Our approach combines expertise, innovation, and a deep understanding of the job market to deliver effective recruitment solutions that benefit both employers and job seekers. 
            </p> 
          </div> 
        </div> 
      </div> 
      <div> 
        <h1 className='text-xl md:text-2xl bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Our Services</h1> 
      </div> 
      {ourServices.map(item => ( 
        <div key={item.id} className="flex items-center justify-center w-full"> 
          <div className={`flex w-full md:w-3/4 px-4 md:px-10 py-4 shadow-lg items-center justify-between gap-3 ${item.id % 2 === 0 ? 'bg-[#f5f8ff] flex-row-reverse rounded-l-full' : 'bg-[#fff5ff] rounded-r-full'}`}> 
            <div className='flex flex-col gap-4 w-[60%] md:w-[55%] p-4 md:p-10'> 
              <div> 
                <h1 className='text-xl md:text-2xl bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent'>{item.title}</h1> 
              </div> 
              <div> 
                <p>{item.desc}</p> 
              </div> 
              <div className='text-blue-700 items-center justify-center'> 
                <button className='flex border border-blue-600 px-4 rounded-full items-center mr-8'> 
                  Learn More 
                  <span><ArrowForwardIcon /></span> 
                </button> 
              </div> 
            </div> 
            <div className='flex w-[35%] md:w-[40%]'> 
              <img src={item.img} alt="Service" className='w-full h-auto' /> 
            </div> 
          </div> 
        </div> 
      ))} 
      <div> 
        <h1 className='text-xl md:text-2xl bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Service Map</h1> 
      </div> 
      {items.map(item => ( 
        <div key={item.id} className='flex items-center justify-center w-full'> 
          <div className='flex w-full md:w-3/4 p-10 md:p-20 shadow-lg items-center justify-center gap-3 bg-[#f9f9f9] rounded-[12px]'> 
            <div className='w-full md:w-[30%] items-center justify-center'> 
              <h1 className='text-[#002b9a] font-semibold font-serif'>{item.title}</h1> 
            </div> 
            <div className='w-full md:w-[70%] items-center justify-center flex flex-col gap-4 leading-none'> 
              <List spacing={3}> 
                <ListItem> 
                  <ListIcon as={CheckCircleIcon} color='green.500' /> {item.desc1} 
                </ListItem> 
                <ListItem> 
                  <ListIcon as={CheckCircleIcon} color='green.500' /> {item.desc2} 
                </ListItem> 
              </List> 
            </div> 
          </div> 
        </div> 
      ))} 
      <div> 
        {/* <h1 className="font-semibold text-lg md:text-1xl bg-gradient-to-r from-blue-900 via-purple-500 to-pink-500 bg-clip-text text-transparent"> 
          View All Services 
        </h1>  */}
     
      </div> 
      
    </div> 
  ); 
}; 

export default Homes;
