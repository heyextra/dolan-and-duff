

const enterAnimation = (container) => {
  return gsap.from(container, {autoAlpha: 0, clearProps:"all", duration: .8, ease: "none"})
}
const leaveAnimation = (container) => {
  return gsap.to(container, {autoAlpha: 0, clearProps:"all",  duration: .8, ease: "none" })
}
const buttonLeaveAnimation = () => {
  var tl = gsap.timeline()
  tl.to("button", {transform: "translate(0px, 0px)", duration: 1})
  
}
const buttonEnterAnimation = () => {
 gsap.to("button", {transform: "translate(0px, -300px)", opacity: 1, delay:1.3, duration: 1})
}

const pageAnimation = () => {

var tl = gsap.timeline({defaults:{duration: 1}})
tl.from("main", { y:"100px"} )
.from("#heading", {opacity: 0, y:"-100px"},"-=.7")
.from(".desc", {opacity:0},"-=.8")
.from("aside", {clipPath: "polygon(50% 100%, 100% 50%, 50% 100%, 0% 50%)"},"-=1.5")
}



const pageLeaveAnimation = () => {
  gsap.to("aside", {clipPath: "polygon(50% 100%, 100% 50%, 50% 100%, 0% 50%)"})
  }
  
  const serviceAnimation = () => {

    var tl = gsap.timeline({defaults:{duration: 1}})
    tl.from("#core", {opacity:0, y:"100px"} )
    .from(".service", {opacity: 0, y:"-20px", stagger: 0.2, ease: "power2.in" },"-=.7")
    }





// barba.init({
//   transitions: [
//     {
//       name: "slide",
//        from: {namespace: ["home"]},
//        to: {namespace: ["about"]},
//       afterEnter: (data) => {console.log("AYEEEE")},
//       beforeLeave: (data) => console.log("YOOOOOO")
//     }
    // {
    //   name: "main",
    //   once({next}){
    //     enterAnimation(next.container);

    //   },
    //  leave: ({current}) => leaveAnimation(current.container),
    //   enter({next}){
    //     enterAnimation(next.container)
    //   }
    // }
  // ]

// ,
//     views: [
//       {
//        namespace: "home",
//         afterEnter(data) {
//         pageAnimation()
//         },
//         beforeLeave: (data) => pageLeaveAnimation()
       
//       },
//       {
//         namespace: "about",
//          afterEnter(data) {
//          pageAnimation()
//          },
//          beforeLeave: (data) => pageLeaveAnimation()

        
//        }
//     ]

  // });
      
    
     
  
  barba.init({
    transitions: [
      {
          name: "main",
          once({next}){
            enterAnimation(next.container);
    
          },
         leave: ({current}) => leaveAnimation(current.container),
          enter({next}){
            enterAnimation(next.container)
          }
        }
      
      ,{
          name: "main-button",
          beforeOnce({next}){
            enterAnimation(next.container);
          },
          once(){pageAnimation()},
          afterOnce(){
            buttonEnterAnimation()
          },
         leave: ({current}) => leaveAnimation(current.container),
          enter({next}){
            enterAnimation(next.container)
          },
          afterEnter(){
            buttonEnterAnimation()
          },
          after(){
            pageAnimation()
          },
          to: {
            namespace: [
              'home',
              'about',
              'contact'
            ]
          }
        },
      {
      name: 'home-to-others',
      leave: ({current}) => leaveAnimation(current.container),
      before() {
        pageLeaveAnimation()
      },
      beforeLeave(){
        buttonLeaveAnimation()
      },
      enter({next}){
        enterAnimation(next.container)
     },
     afterEnter(){
       serviceAnimation()
     },
        after(){
          buttonEnterAnimation()
        },
      from: {
        namespace: [
          'home',
          'about',
          'contact'
        ]
      },
      to: {
        namespace:[
          'services'
        ]
      }
    }]
  });
