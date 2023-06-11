/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 ./public/heart.glb --transform
Author: omarelone (https://sketchfab.com/omarelone)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pumping-heart-model-6f815b9822dc479eae0a17b8dcab9c75
Title: PUMPING HEART MODEL
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Heart(props) {
  const group = useRef()
  // @ts-ignore
  const { nodes, animations } = useGLTF('/heart.glb')
  // const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="f6bcb81c5d674405b84df409a29b9a55fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="BASE_HEART" position={[-0.68, 38.88, -0.26]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5" position={[-0.09, 0, -38.88]}>
                    <mesh name="BASE_HEART_Material_#41_0" geometry={nodes['BASE_HEART_Material_#41_0'].geometry} >
                      <meshPhysicalMaterial wireframe={true} color={'red'} />
                    </mesh>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/heart-transformed.glb')
