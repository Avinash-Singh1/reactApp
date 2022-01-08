
import React,{useState} from 'react'

export default function About() {

    const [mystyle, setmystyle] = useState(
        {
            color:"black",
            backgroundColor:"white"
        }
    )   
         const [bgstate, setBgnstate] = useState("#FFB5B5");

        const [btnstate, setBtnstate] = useState("Enable Dark Mode");
    const toggle=()=>
    {
        if(mystyle.color=="black")
        {
            setmystyle({
                color:"white",
                backgroundColor:"black",
                border:"1px solid yellow"
            })
            setBtnstate("Enalble Light mode");
        }

        else
        {
            setmystyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtnstate("Enalble Dark mode");
        }


    }

    return (
        <div className='container' style={mystyle}>
            <h1 className='my-3'>About us</h1>
            <div class="accordion" id="accordionExample">
                    <div class="accordion-item" style={mystyle}>
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={mystyle}>
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={mystyle}>
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
            </div>

        {/* <button className='btn my-2' >Enable Dark mode</button> */}
        <button onClick={toggle} type="button" class="btn btn-primary my-2">{btnstate}</button>
     


        </div>
    )
}
