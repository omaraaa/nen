import Layout from "../components/layout"
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'


export default () => {
    return (
        <Layout>
            <div className="grid_pat flex-grow h-[80vh]" onContextMenu={(e) => { e.preventDefault(); return false; }}>
            </div>
        </Layout>
    )
}