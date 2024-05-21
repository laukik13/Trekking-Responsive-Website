import React, { useEffect } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Cardpost from '../Components/Cardpost'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navtab from '../Components/Navtab'
import Testimonialcard from '../Components/Testimonialcard'
import Subscribecard from '../Components/Subscribecard'

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration : 2000});
 },[])  

  return (
   <>
<div className='main-wrapper'>
<section className='blog-wrapper'>
   <div className='blog-inner-wrapper'>
    <Navtab/>
   <div className='blog-head-wrapper'>
            <h3>Blog</h3>
            <Breadcrumb
            title='Blog'
            />
         </div>
         <div className='img-forest-wrapper'>   
                <img src='./Images/pineforest.png' alt='pineforest'/>
           </div>
            <div className='img-slider-wrapper'>   
                <img src='./Images/slidermask.png' alt='slidermask'/>
           </div>                 
   </div>
   </section>
   <section className='bloggs-wrapper'>
   
           <div className='blogs-searchdiv shadow'>
             <input type='text' className='search-input' placeholder='Search'/><button type='button' className=' btn btn-primary search-bttn'>Search</button>
           </div>
           <div className='bloggs-postdiv px-5 mb-3' data-aos="fdae-down">
              <Cardpost
               picc="../images/blog1.jpg" 
               topic="The last summer days"
               dd="21"  
               mon="APR" 
               yyr="2019"
               relate="ANIMALS, PEOPLE,TRAVEL"
               descst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.... '
               desclg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
               Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor, laoreet sapien a, ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Etiam efficitur in arcu ut lacinia.'
              />
              <Cardpost
              picc="../images/blog2.jpg"
              topic="A Rare Frog Finds a Mate"
              dd="15" 
              mon="APR" 
              yyr="2019"
              relate="NATURE, PEOPLE"
              descst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.... '
              desclg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor, laoreet sapien a, ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Etiam efficitur in arcu ut lacinia.'
              />
              <Cardpost
              picc="../images/blog3.jpg"
              topic="Boiological diversity manifesto"
              dd="21"
              mon="MAR" 
              yyr="2019"
              relate="ANIMALS,TRAVELS"
              descst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.... '
              desclg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor, laoreet sapien a, ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Etiam efficitur in arcu ut lacinia.'
                     />
                     <Cardpost
               picc="../images/blog1.jpg" 
               topic="The last summer days"
               dd="21"  
               mon="APR" 
               yyr="2019"
               relate="ANIMALS, PEOPLE,TRAVEL"
               descst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.... '
               desclg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
               Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
               Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor, laoreet sapien a, ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Etiam efficitur in arcu ut lacinia.'
              />
              <Cardpost
              picc="../images/blog2.jpg"
              topic="A Rare Frog Finds a Mate"
              dd="15" 
              mon="APR" 
              yyr="2019"
              relate="NATURE, PEOPLE"
              descst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.... '
              desclg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor, laoreet sapien a, ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Etiam efficitur in arcu ut lacinia.'
              />
              <Cardpost
              picc="../images/blog3.jpg"
              topic="Boiological diversity manifesto"
              dd="21"
              mon="MAR" 
              yyr="2019"
              relate="ANIMALS,TRAVELS"
              descst='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.... '
              desclg='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor, laoreet sapien a, ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Etiam efficitur in arcu ut lacinia.'
              />
           </div>
   </section>
   <Testimonialcard/>
   <Subscribecard/>
</div>
   </>
  )
}

export default Blog
