import Image from "next/image";

// import css module for this component
// any class defined in the module will be available with dot notation
import styles from "@/styles/About.module.css";
import { useState } from "react";

export default function About() {
    const [fontSize, setFontSize] = useState(2)
    return (
        <>
            <h1>About Me</h1>
            <p className={styles.greenColor}>I am a full stack software engineer, meaning I turn letters and curly braces into digital GUI.</p>
            {/* this is the first way to bring in an image */}
            <img src="/headshot.png" alt="Long Hair Leah" />

            {/* dynamic css with js values injected into it. from state/context */}
            <style jsx>{`
                .fontSize {
                    font-size: ${fontSize}rem;
                }
            `}</style>

            
            <p className="fontSize">This is my brand statement.</p>
            <button onClick={() => setFontSize(fontSize +1)}>Click me!</button>

            {/* this is the other way to bring in an image, difficult for responsiveness this way */}
            <Image 
                src="/tuna.jpeg"
                alt="Tuna Cat"
                width={500}
                height={600}
            />

            {/* this is a third way using a third party hosting service */}
            <Image 
                src="https://placekitten.com/400/600"
                alt="Cat"
                width={400}
                height={600}
            />
        </>
    )
}