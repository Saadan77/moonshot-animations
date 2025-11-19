"use client";

import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, useAnimations } from '@react-three/drei'

function Model(props) {
    const group = useRef()
    const { scene, animations } = useGLTF('/images/astronaut.glb')
    const { actions } = useAnimations(animations, group)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.y = 0.2 * Math.sin(t / 6)
            group.current.position.y = -1.4 + Math.sin(t / 2) * 0.05
        }
    })

    useEffect(() => {
        if (!actions) return
        const walkAction = actions['wave'] || Object.values(actions)[0]
        if (walkAction) {
            try {
                walkAction.reset()
                walkAction.fadeIn(0.2)
                walkAction.play()
            } catch (e) {
                // ignore if action can't be played
            }
        }
    }, [actions])

    return <primitive ref={group} object={scene} {...props} position={[0, 1.4, 0]} rotation={[0, 0, 0]} />
}

export default function Astronaut() {
    return (
        <div className="relative w-[450px] h-[800px] max-md:h-[400px]">
            <Canvas camera={{ position: [0.8, 0.6, 4], fov: 50 }}>
                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 3.2}
                    maxPolarAngle={Math.PI / 2.1}
                />
            </Canvas>
        </div>
    )
}

// Preload the model
useGLTF.preload('/images/astronaut.glb');
