"use client";

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'

function Model(props) {
    const group = useRef()
    const { scene } = useGLTF('/images/portfolio-page/macbook.glb')
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.y += 0.005
            group.current.position.y = Math.sin(t / 2) * 0.1
        }
    })
    
    return <primitive ref={group} object={scene} {...props} scale={4} />
}

export default function MacModel() {
    return (
        <div className="relative w-[750px] h-[750px] max-md:w-[400px] max-md:h-[400px]">
            <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.8} />
                <directionalLight position={[0, 5, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls 
                    enablePan={false} 
                    enableZoom={false} 
                    minPolarAngle={Math.PI / 2.5} 
                    maxPolarAngle={Math.PI / 2.5} 
                />
            </Canvas>
        </div>
    )
}

// Preload the model
useGLTF.preload('/images/portfolio-page/macbook.glb');
