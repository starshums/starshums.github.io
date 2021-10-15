import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'

import url from "./video.mp4";
import Fezbot from "../models/Fezbot"
import Star from "../models/Star";

const Box = (props) => {
    const ref = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += 0.01
    })

    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? 1.5 : 1}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : props.color} />
        </mesh>
    )
}

const VideoPlane = (props) => {

    const ref = useRef()

    const [video] = useState(() => {
        const vid = document.createElement("video");
        vid.src = url;
        vid.crossOrigin = "Anonymous";
        vid.loop = true;
        vid.muted = true;
        vid.play();
        return vid;
    });

    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, 0, -70]}
            rotation={[-.7, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[300, 100]} />
            <meshStandardMaterial>
                <videoTexture attach="map" args={[video]} />
            </meshStandardMaterial>
        </mesh>
    );
}

const Plane = (props) => {

    const ref = useRef()

    return (
        <mesh
            {...props}
            ref={ref}
            position={[0, 149.5, 0]}
            rotation={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 300]} />
            <meshPhongMaterial attach="material" color="#42034d" />
        </mesh>
    );
}

const CanvasApp = () => {
    return (
        <div id="canvas-container">
            <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-65, -50, 10]} />
                {/* <Box position={[-2, -1, 2]} color={"orange"} />
                <Box position={[1, 2, 1]} color={"purple"} /> */}
                <Suspense fallback={null}>
                    <Fezbot />
                    <Star scale={[.2, .2, .2]} position={[1, 2, 1]} color={"purple"}/>
                    <Star scale={[.6, .6, .6]} position={[4, 2, 1]} color={"orange"}/>
                    <Star scale={[.4, .4, .4]} position={[-3, -2, 1]} color={"purple"}/>
                </Suspense>
                <VideoPlane />
                <Plane />
            </Canvas>
        </div>
    )
}

export default CanvasApp;