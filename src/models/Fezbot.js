import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

export default function Fezbot(props) {
    const ref = useRef()
    const texture = useTexture("/updatedPalette.png")
    const { nodes, materials } = useGLTF('/fezbot.gltf')

    console.log(nodes);

    if (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(2, 2)
        texture.anisotropy = 16
    }

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
        ref.current.rotation.x = Math.cos(t / 4) / 8
        ref.current.rotation.y = Math.sin(t / 4) / 8
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    return (
        <group ref={ref} {...props} dispose={null}>
            <mesh receiveShadow castShadow scale={[.9, .9, .9]} position={[2, 2, 1]} rotation={[4.5, -.5, .8]} geometry={nodes['Model'].geometry}>
                <meshStandardMaterial color="orangered" />
            </mesh>
        </group>
    )
}

useGLTF.preload('/fezbot.gltf')