import React from 'react'
import Card from './Components/Card'
import User from './Components/Card'


const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: 55,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s",
      companyName: "Apple",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Engineer",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "3 days ago",
      post: "React Developer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Pune, India"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 weeks ago",
      post: "Backend Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&sm",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Azure Developer",
      tag: "Full Time",
      tag2: "Junior Level",
      pay: 60,
      location: "Noida, India"
    },
    {
      brandLogo: "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark-Black-Logo.wine.svg",
      companyName: "Tesla",
      datePosted: "4 weeks ago",
      post: "Embedded Systems Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Delhi, India"
    },
    {
      brandLogo: "https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "AI/ML Engineer",
      tag: "Full Time",
      tag2: "Mid Level",
      pay: 80,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg",
      companyName: "Adobe",
      datePosted: "9 weeks ago",
      post: "UI/UX Designer",
      tag: "Part Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&sm",
      companyName: "Uber",
      datePosted: "2 days ago",
      post: "Data Engineer",
      tag: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Gurgaon, India"
    }
  ];
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem) {
        return <Card company={elem.companyName} brand={elem.brandLogo} post={elem.post}
          datePosted={elem.datePosted} tag={elem.tag} tag2={elem.tag2} pay={elem.pay}
          location={elem.location} />
      })}

    </div>
  )
}

export default App