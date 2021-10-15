import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

export default function Star(props) {

    const ref = useRef()
    const { nodes } = useGLTF('/star.gltf')

    console.log(nodes);

    useFrame(() => {
        ref.current.rotation.x = ref.current.rotation.y += 0.005;
    })

    return (
        <group ref={ref} {...props} dispose={null}>
            <mesh receiveShadow castShadow geometry={nodes['star'].geometry}>
                <meshStandardMaterial color={props.color} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/star.gltf')