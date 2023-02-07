import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Full-Stack Developer',
                    'Dedicated Team-Member',
                    'Entrepreneur',
                    'Avid Hiker',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}

export default Type;