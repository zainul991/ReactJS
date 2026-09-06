import React from 'react'

import Card from './components/card'
const App = () => {


  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/jpeg;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];


  return (
    <div className='parent'>
     {
      jobOpenings.map(function(elem, idx){
        return <div key={idx}>
        <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo}
        pay={elem.pay} tag2={elem.tag2} location ={elem.location}/>
       </div>
     })  }
    </div>
  )
}

export default App

// array ke through data paass karenge 