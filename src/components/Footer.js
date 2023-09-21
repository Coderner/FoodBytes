import Logo from "../assets/img/Logo.png";

const Footer = () =>{
    return(
       <div className="flex h-28 border-y-2 justify-center py-8 mt-6">
          <img className="h-10" alt="logo" src={Logo}/>
          <p className="my-2 mr-1 font-semibold"> created by </p>
          <a href="https://github.com/Coderner" target="_blank" className="my-2 font-semibold text-red-600">
              Shreya Shukla
          </a>
       </div>
    )
}

export default Footer;