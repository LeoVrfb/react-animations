import React, {useState} from 'react'
import './Scroll.css'
import {Waypoint} from 'react-waypoint'
import {useSpring, animated} from 'react-spring'


export default function Scroll() {


    const [toggleTxt, setToggleTxt] = useState(false)

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"
    })

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti sit ipsam, dignissimos consectetur mollitia, quia, voluptates neque sed nostrum nulla reiciendis voluptatibus impedit delectus alias iure officiis. Repellendus iste natus eos! Vero ab tenetur error voluptas dolores atque veritatis aperiam impedit dolorem, quis non animi, iste fugiat optio ad laboriosam doloremque cum culpa fugit nisi, laudantium ipsa? Blanditiis reiciendis vel odit nostrum amet, sequi asperiores quia consequatur excepturi ducimus, ut neque. Porro in magni, beatae fuga sed illum doloribus aut hic? Ipsam minima alias ipsa, facilis quos perspiciatis, provident vel officia quaerat tenetur facere magni quisquam praesentium veritatis sapiente ipsum non ad delectus laudantium dolorum? Obcaecati consequuntur, beatae, hic veritatis dolorem quasi quaerat sapiente, earum enim ut ducimus assumenda. Error asperiores enim quos harum ab omnis rerum numquam nam autem fugiat perspiciatis facilis, natus, neque in libero. Facilis pariatur maiores architecto cumque, ipsum placeat! Obcaecati odio architecto autem explicabo provident culpa labore rem dolor impedit quisquam ipsum iure perferendis, aspernatur dolorum distinctio rerum quod neque vero. Aperiam amet eum sequi atque maiores cumque nihil voluptate saepe quod placeat ducimus quos odio, facere, cupiditate sit earum voluptates, minus quam corrupti exercitationem? Fugiat consectetur nobis incidunt fuga accusamus, commodi earum at.
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti sit ipsam, dignissimos consectetur mollitia, quia, voluptates neque sed nostrum nulla reiciendis voluptatibus impedit delectus alias iure officiis. Repellendus iste natus eos! Vero ab tenetur error voluptas dolores atque veritatis aperiam impedit dolorem, quis non animi, iste fugiat optio ad laboriosam doloremque cum culpa fugit nisi, laudantium ipsa? Blanditiis reiciendis vel odit nostrum amet, sequi asperiores quia consequatur excepturi ducimus, ut neque. Porro in magni, beatae fuga sed illum doloribus aut hic? Ipsam minima alias ipsa, facilis quos perspiciatis, provident vel officia quaerat tenetur facere magni quisquam praesentium veritatis sapiente ipsum non ad delectus laudantium dolorum? Obcaecati consequuntur, beatae, hic veritatis dolorem quasi quaerat sapiente, earum enim ut ducimus assumenda. Error asperiores enim quos harum ab omnis rerum numquam nam autem fugiat perspiciatis facilis, natus, neque in libero. Facilis pariatur maiores architecto cumque, ipsum placeat! Obcaecati odio architecto autem explicabo provident culpa labore rem dolor impedit quisquam ipsum iure perferendis, aspernatur dolorum distinctio rerum quod neque vero. Aperiam amet eum sequi atque maiores cumque nihil voluptate saepe quod placeat ducimus quos odio, facere, cupiditate sit earum voluptates, minus quam corrupti exercitationem? Fugiat consectetur nobis incidunt fuga accusamus, commodi earum at.
            </p>

                <Waypoint
                bottomOffset="30%"
                onEnter={() => {
                    if(!toggleTxt){
                        setToggleTxt(true)
                    }
                }}/>
                <animated.div style={animation} className="cta-section">
                    <h2>N'en ratez pas une miette !</h2>
                    <form action="email">
                        <label htmlFor="email">Inscrivez-vous à la newsletter</label>
                        <input type="email" id="email"/>
                    </form>
                </animated.div>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit deleniti sit ipsam, dignissimos consectetur mollitia, quia, voluptates neque sed nostrum nulla reiciendis voluptatibus impedit delectus alias iure officiis. Repellendus iste natus eos! Vero ab tenetur error voluptas dolores atque veritatis aperiam impedit dolorem, quis non animi, iste fugiat optio ad laboriosam doloremque cum culpa fugit nisi, laudantium ipsa? Blanditiis reiciendis vel odit nostrum amet, sequi asperiores quia consequatur excepturi ducimus, ut neque. Porro in magni, beatae fuga sed illum doloribus aut hic? Ipsam minima alias ipsa, facilis quos perspiciatis, provident vel officia quaerat tenetur facere magni quisquam praesentium veritatis sapiente ipsum non ad delectus laudantium dolorum? Obcaecati consequuntur, beatae, hic veritatis dolorem quasi quaerat sapiente, earum enim ut ducimus assumenda. Error asperiores enim quos harum ab omnis rerum numquam nam autem fugiat perspiciatis facilis, natus, neque in libero. Facilis pariatur maiores architecto cumque, ipsum placeat! Obcaecati odio architecto autem explicabo provident culpa labore rem dolor impedit quisquam ipsum iure perferendis, aspernatur dolorum distinctio rerum quod neque vero. Aperiam amet eum sequi atque maiores cumque nihil voluptate saepe quod placeat ducimus quos odio, facere, cupiditate sit earum voluptates, minus quam corrupti exercitationem? Fugiat consectetur nobis incidunt fuga accusamus, commodi earum at.
            </p>
        </div>
    )
}
