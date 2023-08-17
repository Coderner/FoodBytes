import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) =>{
   
   return(
      <div className="border border-red-400 p-4 m-6">
            <h2 className="font-bold text-xl text-red-500 my-2">{title}</h2>
            {isVisible?
            <button onClick={()=> setIsVisible()}>Collapse ▲</button>:
            <button onClick={()=> setIsVisible()}>Expand ▼</button>}
            {isVisible &&  <p className="my-2">{description}</p>}
      </div>
   )
};

const About = () =>{
   const[visibleSection, setVisibleSection]= useState("")
   return(
     <div>
         <h1 className="text-3xl font-semibold p-2 m-4">FoodBytes - Get your food at one tap!</h1>
         <Section title={"About Us"} 
                  description={"This is Food ordering website trying to integrate other consumer needs as well to give a seamless experience to the user. Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, Lets do this."}
                  isVisible={visibleSection==="about"}
                  setIsVisible={()=>(
                     visibleSection==="about"?setVisibleSection(""):setVisibleSection("about"))}/>
         <Section title={"Careers"}
                  description={"We build innovative products & solutions that deliver unparalleled convenience to urban consumers.The best part? Every bit of your work at FoodBytes will help elevate the lives of our users across India."}
                  isVisible={visibleSection==="careers"}
                  setIsVisible={()=>(
                     visibleSection==="careers"?setVisibleSection(""):setVisibleSection("careers"))}/>
         <Section title={"Values we stand for"}
                  description={"Consumer Comes First. We are paranoid about consumer experience and measure success by consumer impact.from their needs.We spend time listening to and deeply understanding our consumers’ needs."}
                  isVisible={visibleSection==="values"}
                  setIsVisible={()=>(
                     visibleSection==="values"?setVisibleSection(""):setVisibleSection("values"))}/>
    </div>
   )
};

export default About;