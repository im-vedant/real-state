
'use client'
import Navbar from "./components/Navbar";
import Slider from './components/Slider'
import Sidebar from './components/Sidebar'
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  const services=[{title : "Home Search", imgLink: 'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/p0umdkewvrcjivs9m8n0/1'},
    {title : "Home Valuation",imgLink : 'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/xn88vjdwodf6jsel7sxk/2'},
    {title : "Staging Services",imgLink : 'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/zzi4xh1le34liriu9rvf/3'},
  ]
  const places=[{title : "Salt Lake City",img: 'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/hkkhrdv599s1zk4ls8e9/img_2255'},
    {title : "Summit Country",img : 'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/ywuypgur18mqpqotkgzs/shutterstock_1537714529'},
    {
      title : 'Saratoga Springs',
      img : 'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/kjfti85atlltjfkff0pf/img_2254'
    },
    {
      title : 'Park City',
      img : 'https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/sxmnte6ciacang9ghwbo/img_2251'
    }
  ]

  const blogs=[{title : 'THE ROLE OF INSPECTIONS IN SHOWCASING THE EXCELLENCE OF YOUR ULTRA-...', desc : "Elevating the Value of Ultra-Luxury Properties Through Comprehensive Inspections.a", img : 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ela3c1kxhtpgsr2ya6cq/header-photo', date : 'May 30, 2024'},
    {title : 'HOW TO MARKET YOUR LAVISH PROPERTY TO AFFLUENT BUYERS', desc : "Strategies for Showcasing Your Luxury Home to the World's Most Discerning Buyers.", img : 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hkzugruepuyn5nmjile7/header-photo', date : 'May 30, 2024'},
    {title : 'Mastering the Closing Process for Luxury Real Estate', desc : 'Navigating the Intricacies of Luxury Real Estate Transactions with Precision and Expertise.', img : 'https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hcrwlg5m0q6jyf3y6sfz/header-photo', date :'May 7, 2024'}
  ]
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <section className="relative h-screen bg-black bg-opacity-40">
        <div className="-z-10 absolute top-0">
          <video className=" object-cover h-screen w-screen" poster="https://res.cloudinary.com/luxuryp/videos/f_auto,q_auto/so_0,eo_0/eqxvtgwttminuwvztet9/mov_6721.jpg" loop muted autoPlay playsInline>
            <source src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/eqxvtgwttminuwvztet9/mov_6721.webm" type="video/webm" />
            <source src="https://res.cloudinary.com/luxuryp/videos/f_auto:video,q_auto/eqxvtgwttminuwvztet9/mov_6721.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mx-auto max-w-[1000px] text-center py-[190px] ">
          <h2 className="font-sans text-[24px] pt-2">Utah's Premier Luxury Real Estate Experts</h2>
          <h1 className="text-[#C5A95E] capitalize text-[70px] ">Utah's Finest Realtors</h1>

          <div className="flex flex-row space-x-9 justify-center mt-8">
            <button className="px-[46px] w-[270px] py-5 border-[2px] capitalize hover:text-[#C5A95E]   bg-transparent text-white hover:bg-white transition-all duration-700 ease-out border-white">
              Browse Homes
            </button>
            <button className="px-[46px] w-[270px] py-5 border-[2px] capitalize hover:text-white text-[#C5A95E]   bg-transparent hover:bg-[#C5A95E] hover:border-[#C5A95E] transition-all duration-700 ease-out bg-white border-white">
              Get a Quote
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-[50px]">
          <div className="pt-[96px] pb-[48px]">
            <img className="mx-auto" src={"https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/yxbf64av49zl1nlkkmig/team1"} alt="" />
          </div>
          <div className="flex flex-col items-center  justify-center text-center ">
            <img src={"https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/npq9d4ny7bk8idfdlnqy/r3zkl0bugsm2c2ucjlji"} className="w-[300px] mb-[48px]" alt="" />
            <div>
              <h1 className="text-[25px] text-[#C5A95E] capitalize italic mb-[20px]">
                Giving luxury service at every price point
              </h1>
              <h1 className="text-[43px] text-black max-w-[1000px] mb-[24px] mx-auto">
                BEST REALTORS IN UTAH – LUXURY REAL ESTATE AGENTS
              </h1>
              <p className="text-black font-serif ">
                Experience the beauty and diversity of Utah's real estate landscape with our team, via each trusted real estate agent. From the breathtaking natural wonders in Park City, to the dynamic urban hubs in Salt Lake City, Draper & Lehi, our expert guidance will help you find the perfect place to call home. Our Luxury Utah Realtors have a deep understanding of Utah's neighborhoods and market trends. As a result, we are here to ensure that you make informed decisions whether you're buying or selling.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row  max-w-[1200px] mx-auto py-[50px]">
         <div className="flex-1">
         <img className="max-w-[525px] max-h-[525px]" src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/mdjuixiare78bs22fevo/team2" srcSet="https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/mdjuixiare78bs22fevo/team2 320w, https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/mdjuixiare78bs22fevo/team2 960w, https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/mdjuixiare78bs22fevo/team2 1280w, https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/mdjuixiare78bs22fevo/team2 1920w" alt="" loading="lazy"/>
         </div>
          <div className="flex-1">
            <h2 className="pb-[36px] text-black text-[43px] ">Meet the Team</h2>
            <div className="border w-[80%] border-[#C5A95E]">

            </div>

            <div className="text-black font-serif mt-[50px] text-[20px] w-[80%]">

            Providing each and every one of our clients with the best possible service and experience is our top priority.


            </div>
          </div>
        </div>

      </section>
      <section className="bg-black">
          <div className="max-w-[1400px] flex flex-row  mx-auto py-[96px] px-[50px]">
              {
                services.map((service,index) => {
                  return <div key={index} className="mx-[13px] overflow-hidden group flex-1 relative">
                      <img src={service.imgLink}  className="z-10  opacity-60  transition-all duration-1000 group-hover:scale-110 group-hover:opacity-85 h-full w-full" alt="" />
                        <h2 className="z-40 text-center capitalize -translate-y-[100px] group-hover:-translate-y-[180px] transition-all duration-1000 text-white text-[43px]">{service.title}</h2>
                  </div>
                })
              }
          </div>
          <div className="flex flex-row  max-w-[1200px] mx-auto py-[50px]">
         <div className="flex-1">
         <img className="max-w-[525px] max-h-[525px]" src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/jigizy0lkl644vc8pya8/paige-headshot-1" alt="" loading="lazy"/>
         </div>
          <div className="flex-1">
            <p className="text-[#C5A95E] italic text-[25px] mb-[-10px]">A True Expert</p>
            <h2 className="pb-[36px] text-white text-[43px] ">Meet Paige</h2>
            <div className="border w-[80%] border-[#C5A95E]">

            </div>

            <div className="text-white font-serif mt-[50px] text-[20px] w-[80%]">

            With over 9 years of experience selling residential real estate, Paige has become one of the top-selling agents in the state of Utah. She prides herself on offering a white glove, full-service experience to both buyers and sellers with the help of her amazing team!


            </div>
          </div>
        </div>
      </section>

      <section style={{backgroundColor : "rgba(0, 0, 0, 0.5)", backgroundBlendMode : "overlay"}} className=" bg-[url('https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/mukgcucje2tlvp3cfpym/element-bg2')] bg-cover py-[96px] z-0  ">
      <div  className="max-w-[1400px] z-5 mx-auto">
        <h2 className="text-[25px] italic text-center text-[#C5A95E]">Achieving Dreams</h2>
        <h1 className="text-[53px] mt-[-10px] mb-5  text-center text-white uppercase">Testimonials</h1>
      <Slider/>
      </div>
      </section>

      <section>
        <div>
          <div className=" grid grid-cols-2 grid-rows-2">
            {
              places.map((place,index)=>{
                return <div style={{backgroundImage: `url(${place.img})`}} className='bg-cover flex flex-col items-center group justify-center bg-black bg-opacity-40 bg-blend-overlay h-[500px]' key={index}>
                  <h2 className="text-white z-20 uppercase text-[43px] transition-all duration-700   group-hover:translate-y-[-50px]">{place.title}</h2>
                  <div className=' uppercase w-[220px] opacity-0 mx-auto group-hover:opacity-100 group-hover:translate-y-[-50px] transition-all duration-1000 cursor-pointer text-center px-[34px] py-[15px] hover:bg-white hover:text-[#C5A95E] border-[2px] border-white bg-transparent  text-white font-medium'>
                Learn More
            </div>
                </div>
              })
            }
              
          </div>
        </div>
      </section>

      <section style={{backgroundImage: `url(https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/hc1xf7ghnhxgmelpcso6/element-bg1-1)`}} className=" bg-fixed py-[96px] bg-black bg-opacity-40 bg-blend-overlay  bg-center bg-cover">
        <div className="max-w-[900px] mx-auto">
          <div className="flex flex-row space-x-2 justify-center">
            {
              [1,2,3,4,5].map((item,index)=>{
               
                return <img key={index} src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/pahvoc31uu5a0nbg80xy/star" height={'auto'} className="w-[40px]" ></img>
             
              })
            }
          </div>
          <p className="text-white font-serif text-center mt-[30px] text-[30px]">
            <em>
            "Paige was extremely hard-working, and was always there to help us when we needed it. She exceeded all of our expectations and found us a beautiful home, she was able to help educate us in the process and she was the best agent that we’ve had."
            </em>
          </p>
          <div className="text-white mt-[30px] text-center uppercase text-[30px]">Buyer</div>
        </div>
        
      </section>
      <section className="bg-black">
       
      <div className="flex flex-row max-w-[1400px] space-x-[120px] mx-auto py-[90px] px-[24px] ">
         <div className="min-h-[346px]">
          <img className="h-full" src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fklfyeeoz3ma5roc2grd/staging-services-1" srcSet="https://res.cloudinary.com/luxuryp/images/w_320,c_limit,f_auto,q_auto/fklfyeeoz3ma5roc2grd/staging-services-1 320w, https://res.cloudinary.com/luxuryp/images/w_960,c_limit,f_auto,q_auto/fklfyeeoz3ma5roc2grd/staging-services-1 960w, https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fklfyeeoz3ma5roc2grd/staging-services-1 1280w, https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/fklfyeeoz3ma5roc2grd/staging-services-1 1920w, https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/fklfyeeoz3ma5roc2grd/staging-services-1 2400w" sizes="(max-width: 992px) 100vw, 50vw" alt="main"  loading="lazy"/>
         </div>
          <div className="max-w-[550px]">
            <h2 className=" capitalize italic text-[#C5A95E] text-[25px] ">Ordinary to Extraordinary</h2>
            <h2 className=" uppercase text-white  text-[43px] ">Staging Services</h2>
            <div className="text-white font-serif mt-[30px] text-[20px] w-[80%]">

            In the world of real estate, first impressions matter. Welcome to Our Staging Services section, where we transform your property into a captivating and irresistible showpiece. We understand the art of showcasing your home's full potential. Discover the power of professional staging and watch your property shine brighter than ever before.


            </div>
            <div className=' uppercase w-fit mt-7 hover:bg-opacity-100 bg-opacity-80 transition-all duration-1000 cursor-pointer text-center px-[46px] py-[20px]  bg-[#C5A95E] text-white font-medium'>
               See Before & after
            </div>
          </div>
        </div>

      </section>

      <section className="bg-white py-[96px]">
            <div className="max-w-[1400px] mx-auto px-[70px]">
                    <div className="mb-[50px]">
                      <h3 className="text-[#C5A95E] italic text-center text-[30px]">The Best Advice</h3>
                      <h1 className="uppercase text-center text-[50px]">
                        Featured Blog Posts
                      </h1>
                    </div>
                    <div className="flex flex-row space-x-[30px] ">
                      {
                        blogs.map((item, index)=>{
                          return <div key={index} className="flex-1">
                              <img src={item.img} alt="" />
                              <h1 className="underline text-[21px] my-4 uppercase">{item.title}</h1>
                              <p className="mb-4 font-serif">{item.desc}</p>
                              <h3 className="font-bold font-serif">{item.date}</h3>
                          </div>
                        })
                      }
                    </div>
            </div>
      </section>

      <section className=" bg-[url('https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/mrfwxiiftdklz45znawr/wwu')] bg-blend-overlay bg-opacity-40 flex justify-center items-center bg-black h-screen">
                      <div className="max-w-[750px] mx-auto p-[50px]">
                          <h2 className="text-white text-center text-[43px] mb-7">Work with us</h2>
                          <div className="border-b-[1px] w-[100px] mb-[30px] mx-auto border-white"></div>
                          <p className="text-white text-[20px] text-center font-serif">Providing each and every one of our clients with the best possible service and experience is our top priority. Our clients choose us because they want to work with the highest standards in the business.</p>
                          <div className=' uppercase w-[220px]  mt-7 mx-auto   transition-all duration-1000 cursor-pointer text-center px-[34px] py-[15px] hover:bg-white hover:text-[#C5A95E] border-[2px] border-white bg-transparent  text-white font-medium'>
                Contact Us
            </div>
                      </div>
      </section>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
    </div>
  );
}
